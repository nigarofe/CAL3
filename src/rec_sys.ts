const MS_PER_DAY = 24 * 60 * 60 * 1000;

const STATUS_ERROR = 'ERROR';
const STATUS_NA = 'NA';
const STATUS_SA = 'SA';
const STATUS_WH = 'W/H';
const STATUS_FROM_MEMORY = 'From memory';

function calculateDaysSinceLastAttempt(date_vector: string[]) {
    // All calculations in GMT-0, hence the 'Z' in the date string
    const today = Date.now();
    const last_attempt_date = new Date(date_vector[date_vector.length - 1] + 'Z').getTime();

    let result = (today - last_attempt_date) / MS_PER_DAY;
    return Math.floor(result);
}

function calculateLatestMemoryIntervalAndPotentialGain(code_vector: number[], date_vector: string[], days_since_last_attempt: number) {
    let latest_memory_interval, potential_memory_gain_multiplier, potential_memory_gain_in_days;
    const memoryIntervals = [];
    for (let j = 1; j < code_vector.length; j++) {
        if (code_vector[j] === 1) {
            const prev = new Date(date_vector[j - 1]);
            const curr = new Date(date_vector[j]);
            memoryIntervals.push(
                Math.floor((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24))
            );
        }
    }
    const lastCode = code_vector[code_vector.length - 1];

    // If it was a single attempt
    if ((lastCode === 1 && code_vector.length === 1)) {
        latest_memory_interval = STATUS_SA;
        potential_memory_gain_multiplier = STATUS_SA;
        potential_memory_gain_in_days = days_since_last_attempt
    } else
        // If the last attempt was with help
        if (memoryIntervals.length === 0 || lastCode === 0) {
            latest_memory_interval = STATUS_WH;
            potential_memory_gain_multiplier = STATUS_WH;
            potential_memory_gain_in_days = days_since_last_attempt;
        } else {
            // Calculate latest_memory_interval and potential_memory_gain_multiplier
            memoryIntervals[memoryIntervals.length - 1] === 0 ?
                latest_memory_interval = 1 : latest_memory_interval = memoryIntervals[memoryIntervals.length - 1];
            potential_memory_gain_multiplier = (
                days_since_last_attempt / latest_memory_interval
            ).toFixed(2);
            potential_memory_gain_in_days = days_since_last_attempt - latest_memory_interval;
        }

    return {
        latest_memory_interval,
        potential_memory_gain_multiplier,
        potential_memory_gain_in_days
    };
}

/**
 * Calculates a summary string of attempts.
 * @returns {string} A summary string in the format "total_attempts; attempts_without_help; attempts_with_help; last_attempt_status".
 * Last attempt status can be 'NA', 'W/H', or 'From memory'.
 */
function calculateAttemptsSummary(code_vector: number[]) {
    const attempts_without_help = code_vector.filter(x => x === 1).length;
    const attempts_with_help = code_vector.filter(x => x === 0).length;
    const total_attempts = attempts_without_help + attempts_with_help;

    const attempts_summary = [
        total_attempts,
        attempts_without_help,
        attempts_with_help
    ].join(';');

    return attempts_summary;
}

export {
    MS_PER_DAY,
    STATUS_ERROR,
    STATUS_NA,
    STATUS_SA,
    STATUS_WH,
    STATUS_FROM_MEMORY,
    calculateDaysSinceLastAttempt,
    calculateLatestMemoryIntervalAndPotentialGain,
    calculateAttemptsSummary
};





const COLOR_SINGLE_ATTEMPT = '128, 128, 0, 1';
const COLOR_WITH_HELP = '128, 0, 128, 1';
const COLOR_NEVER_ATTEMPTED = '0, 0, 200, 1';
const COLOR_SOLID_GREEN = '0, 128, 0, 1';
const COLOR_DEGENERATE_GRAY = '128, 128, 128, 1';
const COLOR_FALLBACK_GRAY = '128, 128, 128, 1';

function calculateCellColor(records: Record<string, any>[], metric_name = 'potential_memory_gain_multiplier') {
    const numericValues = records
        .map(r => parseFloat(r[metric_name]))
        .filter(v => !isNaN(v) && v >= 1);

    const maxVal = Math.max(...numericValues);
    const minVal = Math.min(...numericValues);
    const greatestIsGreen = false;


    records.forEach(r => {
        const v = r[metric_name];

        let colour;

        if (v === STATUS_SA) colour = COLOR_SINGLE_ATTEMPT;   // Single Attempt (no-help)
        else if (v === STATUS_WH) colour = COLOR_WITH_HELP;   // Last round With Help
        else if (v === STATUS_NA) colour = COLOR_NEVER_ATTEMPTED;     // Never attempted
        // Make this a UI responsive value
        else if (!isNaN(v) && v <= 1) colour = COLOR_SOLID_GREEN;        // gain ≤ 1 → solid green
        else if (!isNaN(v)) {
            // numeric and > 1  → gradient
            if (maxVal === minVal) {                 // degenerate case: all the same
                colour = COLOR_DEGENERATE_GRAY;
            } else {
                const normalized = 1 - (v - minVal) / (maxVal - minVal);   // 0-->high, 1-->low
                let red, green; const blue = 0;

                if (greatestIsGreen) {
                    if (normalized <= 0.5) {          // red → yellow
                        green = 255;
                        red = Math.floor(255 * (normalized * 2));
                    } else {                          // yellow → green
                        green = Math.floor(255 * ((1 - normalized) * 2));
                        red = 255;
                    }
                } else {
                    if (normalized <= 0.5) {          // green → yellow
                        red = 255;
                        green = Math.floor(255 * (normalized * 2));
                    } else {                          // yellow → red
                        red = Math.floor(255 * ((1 - normalized) * 2));
                        green = 255;
                    }
                }
                colour = `${red}, ${green}, ${blue}, 1`;
            }
        } else {
            colour = COLOR_FALLBACK_GRAY;              // fallback / corrupt value
        }

        r['PMG-X_cell_color'] = colour;               // attach to the current record
    });
}

export {
    COLOR_SINGLE_ATTEMPT,
    COLOR_WITH_HELP,
    COLOR_NEVER_ATTEMPTED,
    COLOR_SOLID_GREEN,
    COLOR_DEGENERATE_GRAY,
    COLOR_FALLBACK_GRAY,
    calculateCellColor
};
