declare const bootstrap: any;

async function loadComponent(url: string) {
  const componentName = url.split("/").pop()?.split(".")[0];
  if (!componentName) {
    console.error(`Invalid component URL: ${url}`);
    return;
  }
  const placeholderId = `${componentName}-container`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) {
      placeholder.innerHTML = html;
    } else {
      console.error(`Placeholder element not found: ${placeholderId}`);
    }
  } catch (error) {
    console.error(`Failed to load component ${url}:`, error);
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) {
      placeholder.innerHTML = `<p class="text-danger">Error loading component: ${url}</p>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadComponent("components/toast.html"),
    loadComponent("components/sticky-navbar.html"),
    loadComponent("components/add-question-form.html"),
    loadComponent("components/questions-table-mini.html"),
    loadComponent("components/questions-table.html"),
  ]).then(() => {
    (window as any).reloadPage();
    showToast("Welcome!", "This is a sample toast message.", "Just now");

    const metricRadios = [
      { id: "metric-question_number", order_by: "question_number" },
      { id: "metric-pmgx", order_by: "potential_memory_gain_multiplier" },
      { id: "metric-pmgd", order_by: "potential_memory_gain_in_days" },
      { id: "metric-lami", order_by: "latest_memory_interval" },
      { id: "metric-dsla", order_by: "days_since_last_attempt" },
    ];

    metricRadios.forEach((radio) => {
      const el = document.getElementById(radio.id);
      if (el) {
        el.addEventListener("change", function () {
          (window as any).reloadPage();
        });
      }
    });

    const questionCreationform = document.getElementById(
      "add-question-form-container"
    );

    if (questionCreationform) {
      questionCreationform.addEventListener("submit", (event) => {
        event.preventDefault();
        const discipline = (
          document.getElementById("discipline") as HTMLInputElement
        ).value;
        const source = (document.getElementById("source") as HTMLInputElement)
          .value;
        const description = (
          document.getElementById("description") as HTMLInputElement
        ).value;

        (window as any).postQuestion(discipline, source, description);
      });
    }

    const navbarContainer = document.getElementById("sticky-navbar-container");
    if (navbarContainer) {
      const observer = new MutationObserver(() => {
        const el_autohide = document.querySelector(".autohide");
        if (el_autohide) {
          let last_scroll_top = 0;
          window.addEventListener("scroll", function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
              el_autohide.classList.remove("scrolled-down");
              el_autohide.classList.add("scrolled-up");
            } else {
              el_autohide.classList.remove("scrolled-up");
              el_autohide.classList.add("scrolled-down");
            }
            last_scroll_top = scroll_top;
          });
          observer.disconnect();
        }
      });
      observer.observe(navbarContainer, { childList: true });
    }
  });
});

function showToast(
  toastTitle: string,
  toastMessage: string,
  toastTime: string
) {
  const toastLiveExample = document.getElementById("liveToast");
  if (!toastLiveExample) return; // Exit if toast element is not present
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  const toastTitleElem = document.getElementById("toastTitle");
  const toastMessageElem = document.getElementById("toastMessage");
  const toastTimeElem = document.getElementById("toastTime");
  if (toastTitleElem) toastTitleElem.innerHTML = toastTitle;
  if (toastMessageElem) toastMessageElem.innerHTML = toastMessage;
  if (toastTimeElem) toastTimeElem.innerHTML = toastTime;

  toastBootstrap.show();
}