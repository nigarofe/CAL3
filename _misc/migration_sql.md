UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 1;
UPDATE questions SET proposition = '$$\frac{d^2}{dt^2} \left( e^{\gamma t} \right)$$', step_by_step = '', answer = '$$e^{\gamma t} \gamma^2$$', tags = '' WHERE question_number = 2;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 3;
UPDATE questions SET proposition = 'What''s $y$ in the following equation?

$$\frac{dy}{dx} = 4y - 8$$

where
$$y(0) = 5$$', step_by_step = '', answer = '$$y = 2 + 3e^{4x}$$', tags = 'ps20' WHERE question_number = 4;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 5;
UPDATE questions SET proposition = 'Solve for $y$ by using an integrating factor:

$$\frac{dy}{dx} + 5y = 10$$
where
$$y(0) = 6$$', step_by_step = '$$\frac{d}{dx}(u \cdot v) = u'' \cdot v + u \cdot v''$$
$$y'' + 5y = 10$$
$$\mu\,y'' + 5\mu\,y = 10\mu$$
---
$$\frac{d}{dx}(f\cdot g)=f\cdot g''+f''\cdot g$$
$$\frac{d}{dx}(\mu y)=\mu\,y''+\mu''\,y$$
---
$$\mu'' = 5\mu$$
$$\frac{d\mu}{dx} = 5\mu$$
$$\int \frac{1}{\mu} \, d\mu = \int 5 \, dx$$
$$\ln(\mu) = 5x + c$$
$$\mu = c e^{5x}$$
---
$$\frac{d}{dx}(\mu\,y) = 10\mu$$
$$\frac{d}{dx}(c e^{5x}\,y) = 10 \, c e^{5x}$$
$$\frac{d}{dx}(e^{5x} y) = 10 e^{5x}$$
$$\int d(e^{5x} y) = \int 10 e^{5x} \, dx$$
$$e^{5x} y = \int 10 e^{5x} \, dx$$

---
$$u = 5x\,,\quad dx = \tfrac{1}{5}\,du$$
$$\int 10 e^{5x} \, dx = \int 10 \cdot \tfrac{1}{5} e^{u} \, du = 2 \int e^{u} \, du = 2 e^{5x} + c$$
---
$$e^{5x} y = 2 e^{5x} + c$$
$$y = 2 + c e^{-5x}$$
---
$$y(0) = 6$$
$$6 = 2 + c \quad\Rightarrow\quad c = 4$$
$$y = 2 + 4 e^{-5x}$$
---', answer = '$$
y = 2 + 4e^{-5x}
$$', tags = 'ps20' WHERE question_number = 6;
UPDATE questions SET proposition = 'Solve this differential equation:

$$\frac{d^2y}{dx^2} + 3\frac{dy}{dx} + 2y = 0$$

where

$$y(0) = 2$$

$$y''(0) = -3$$', step_by_step = '', answer = '$$y = e^{-x} + e^{-2x}$$', tags = '' WHERE question_number = 7;
UPDATE questions SET proposition = 'What’s the solution to this differential equation?

$$\frac{d^2y}{dx^2} + 7\frac{dy}{dx} + 6y = 0$$

where

- $y(0) = 5$
- $y''(0) = -25$', step_by_step = '', answer = '$$y = e^{-x} + 4e^{-6x}$$', tags = '' WHERE question_number = 8;
UPDATE questions SET proposition = 'Solve this differential equation:

$$2y'''' + 2y'' + y = 0$$

where

- $y(0) = 1$
- $y''(0) = 0$', step_by_step = '', answer = '$$y(x) = e^{-x/2} \cos\left(\frac{x}{2}\right) + e^{-x/2} \sin\left(\frac{x}{2}\right)$$', tags = '' WHERE question_number = 9;
UPDATE questions SET proposition = 'Find the general solution to this differential equation:

$$y'''' - y'' - 2y = 10e^{4x}$$', step_by_step = '', answer = '$$y = c_1e^{-x} + c_2e^{2x} + e^{4x}$$', tags = '' WHERE question_number = 10;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 11;
UPDATE questions SET proposition = 'Calcule a integral de linha
$$
\int_C \sqrt{1 + 4x^2}\, ds,
$$
em que C é a interseção do cilindro $$x^2 + (y - 1)^2 = 1$$ com o plano $$z = 2y$$', step_by_step = '', answer = '$$6\pi$$', tags = '' WHERE question_number = 12;
UPDATE questions SET proposition = 'Calcule a massa de um pedaço de arame cuja forma é descrita pela curva

$$
\overrightarrow{\gamma}(t) = \langle 6t^2,\,4\sqrt{2}t^3,\,3t^4 \rangle,\quad 0 \le t \le 1.
$$

e a densidade é

$$
\rho(x,y,z) = 6 + \lvert x \rvert.
$$', step_by_step = '', answer = '$$84$$', tags = '' WHERE question_number = 13;
UPDATE questions SET proposition = '- Calcule o comprimento da curva
$$\vec{r}(t)=\langle \tfrac{t^2}{2},\,t^3,\,\sqrt{2}\,t^2\rangle;\quad 0\le t\le1.$$', step_by_step = '$$\vec{r}(t) = \bigl(\tfrac{t^2}{2},\,t^3,\,\sqrt{2}\,t^2\bigr),\quad 0\le t\le1$$
$$\int_C f(x,y,z)\,ds = \int_{t_a}^{t_b} f\bigl(x(t),y(t),z(t)\bigr)\,\|\vec{r}''(t)\|\,dt$$
$$\|\vec{r}''(t)\| = \sqrt{\Bigl(\frac{\partial x}{\partial t}\Bigr)^2 + \Bigl(\frac{\partial y}{\partial t}\Bigr)^2 + \Bigl(\frac{\partial z}{\partial t}\Bigr)^2}= \sqrt{t^2 + (3t^2)^2 + (2\sqrt{2}\,t)^2}$$
$$= \sqrt{t^2 + 9t^4 + 8t^2} = \sqrt{9t^4 + 9t^2} = 3t\sqrt{1+t^2}$$
$$\int_{t_a}^{t_b} f\bigl(x(t),y(t),z(t)\bigr)\,\|\vec{r}''(t)\|\,dt = \int_0^1 3t\sqrt{1+t^2}\,dt$$
$$u = 1 + t^2$$
$$\frac{du}{dt} = 2t \implies dt = \frac{du}{2t}$$
$$\int_0^1 3t\sqrt{1+t^2}\,dt = \frac{3}{2}\int_{1}^{2} u^{\frac12}\,du$$
$$= \frac{3}{2}\cdot\frac{2}{3}\bigl[u^{\frac32}\bigr]_{1}^{2} = 2^{\frac32} - 1 = 2\sqrt{2} - 1$$', answer = '$$2\sqrt{2}-1.$$', tags = 'ps1' WHERE question_number = 14;
UPDATE questions SET proposition = '$$\int \frac12\sin(t)e^{-\frac72 - \frac12\cos(t)}\,dt$$', step_by_step = '- $u = -\frac72 - \frac12\cos(t)$  
- $\frac{du}{dt} = \frac12\sin(t)\;\Rightarrow\;dt = \frac{1}{\frac12\sin(t)}\,du$  
- $\displaystyle \int \frac{\frac12\sin(t)}{\frac12\sin(t)}e^{u}\,du = \int e^{u}\,du = e^{u} = e^{-\frac72 - \frac12\cos(t)} + C$', answer = '$$
e^{-\frac72 - \frac12\cos(t)} + C
$$', tags = 'ps17' WHERE question_number = 15;
UPDATE questions SET proposition = 'Considere o campo vetorial $\vec F = \langle y, -x, e^z \rangle$ e a curva $C$, interseção do paraboloide $z = 4 - x^2 - y^2$ com o plano $z = 4 - x$. Calcule a integral

$$
\int_C \vec F \cdot d\vec r.
$$', step_by_step = '[[ps1]]', answer = '$$-\frac{\pi}{2}.$$', tags = '' WHERE question_number = 16;
UPDATE questions SET proposition = 'Calcule a integral  
$$
\int_C (e^y - xe^x - x^5 e^x)\,dx + (x + y^5)e^y\,dy
$$  
em que $C$ é a parte da curva $y = x^{200}$ que liga o ponto $(0,0)$ ao ponto $(1,1)$.', step_by_step = '', answer = '$$e - 1$$', tags = 'ps1' WHERE question_number = 17;
UPDATE questions SET proposition = 'Calcule a integral de linha

$$
\int_C e^{2y}dx + (1 + 2xe^{2y})dy
$$

em que $C$ é a curva parametrizada por $x = te^t$, $y = 1 + \sin\left(\frac{\pi t}{2}\right)$, com $0 \leq t \leq 1$', step_by_step = '', answer = '$$1 + e^5$$', tags = '' WHERE question_number = 18;
UPDATE questions SET proposition = 'Calcule a integral

$$
\int_C (1 + \ln x + e^y)\,dx + \bigl(xe^y + \sin^3(y)\bigr)\,dy
$$

em que $C$ é segmento de reta que liga o ponto $(1,0)$ ao ponto $(e,\pi)$.', step_by_step = '', answer = '$$e + e^{\pi + 1} + \frac{1}{3}.$$', tags = '' WHERE question_number = 19;
UPDATE questions SET proposition = '$$
\int \ln(x) \, dx
$$', step_by_step = '$$
\frac{d}{dx} \ln(x) = \frac{1}{x} = \frac{d}{dx} \int x^{-1} \, dx
$$

$$\int u \, v'' = u \, v - \int u'' \, v$$
$$u = \ln(x) \quad v'' = 1$$
$$u'' = \frac{1}{x} \quad v = x$$
$$\int \ln(x) \, dx = \ln(x) \cdot x - \int \frac{1}{x} \cdot x \, dx$$
  
$$
= x \ln(x) - x + C
$$', answer = '$$x \ln(x) - x + C$$', tags = 'ps17' WHERE question_number = 20;
UPDATE questions SET proposition = '$$\int x^3 \ln(x) dx$$', step_by_step = '$$\int x^3 \ln(x) dx$$
$$u = \ln(x) \quad u'' = 1/x$$
$$v'' = x^3 \quad v = x^4/4$$
$$\int uv'' = uv - \int u''v$$
$$\ln(x) \cdot \frac{x^4}{4} - \int 1/x \cdot \frac{x^4}{4}dx$$
$$\ln(x) \cdot \frac{x^4}{4} - 1/4 \int x^3 dx$$
$$\frac{x^4}{4} \ln(x) - 1/4 \cdot \frac{x^4}{4} + C$$
$$\frac{x^4}{4} (\ln(x) - 1/4) + C$$', answer = '$$\frac{x^4}{4} (\ln(x) - 1/4) + C$$', tags = 'ps17' WHERE question_number = 21;
UPDATE questions SET proposition = '$$\int \sin(x) \cos(x) dx$$', step_by_step = '$$\int \sin(x) \cos(x) dx$$
$$u = \sin(x)$$
$$\frac{du}{dx} = \cos(x) \rightarrow dx = \frac{1}{\cos(x)} \cdot du$$
$$\int \sin(x) \cos(x) dx = \int u \cdot \cos(x) \cdot \frac{1}{\cos(x)} \cdot du$$
$$= \int u du = \frac{u^2}{2} + C = \frac{\sin^2(x)}{2} + C$$', answer = 'Using $u = \sin(x)$
$= \frac{\sin^2(x)}{2} + C_1$.

Using $u = \cos(x)$
$= -\frac{\cos^2(x)}{2} + C_2$.', tags = 'ps17' WHERE question_number = 22;
UPDATE questions SET proposition = '$$\int \sin^2(x)dx$$', step_by_step = '$$\cos(2\theta) = 2\cos^2(\theta)-1$$
$$= 1-2\sin^2(\theta)$$
$$\sin^2(\theta) = - \frac{\cos(2\theta)-1}{2}$$
---
$$\int \sin^2(x)dx =  -1/2 \int \cos(2x)dx + 1/2 \int dx$$
---
$$u=2x$$
$$\frac{du}{dx}=2 \implies dx = 1/2 du$$
---
$$= -1/2 \cdot 1/2 \int \cos u \,du + 1/2 x$$
$$-1/4 \sin(2x) + 1/2 x$$', answer = '$$-1/4 \sin(2x) + 1/2 x$$', tags = 'ps17' WHERE question_number = 23;
UPDATE questions SET proposition = 'Calcule a área da parte do plano $z = 1000 + 3x + 4y$ interior ao cilindro

$$
(x - 51)^2 + (y - 13)^2 = 121.
$$', step_by_step = '', answer = '$$121\sqrt{26}\pi$$', tags = '' WHERE question_number = 24;
UPDATE questions SET proposition = 'Calcule a área da parte da esfera $x^2 + y^2 + z^2 = a^2$ que está acima do plano $z = 1$. ', step_by_step = '', answer = '$$2\pi(a^2 - a)$$', tags = '' WHERE question_number = 25;
UPDATE questions SET proposition = 'Calcule $\iint_S (x^2 + y^2)\, dS$ em que $S$ é a parte do plano $z = 2x + 2y - 1$ interior ao paraboloide $z = x^2 + y^2$.  ', step_by_step = '', answer = '$$\dfrac{15\pi}{2}$$', tags = 'ps2' WHERE question_number = 26;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 27;
UPDATE questions SET proposition = 'Sejam $\vec{F}(x, y, z) = 3xy^2 \, \vec{i} + x^6 e^{-x^8} \, \vec{j} + 3x^2 z \, \vec{k}$ e S a superfície do sólido limitado pelo cilindro $x^2 + y^2 = 9$ e os planos z = 0 e z = 2, com normal apontada para fora. Calcule o fluxo de  $\vec{F}$ sobre S.', step_by_step = '', answer = '$$243\pi$$', tags = '' WHERE question_number = 28;
UPDATE questions SET proposition = 'Utilize o Teorema de Stokes para calcular a integral
$$\oint_{C} y(1+ze^{xz})\,dx + e^{xz}\,dy + xye^{xz}\,dz$$
em que  $C$ é a interseção do parabolóide $z = x^2 + y^2$ com o cilindro $x^2 + y^2 = 2x$, orientada no sentido anti-horário quando vista de cima.', step_by_step = '', answer = '$$-\pi$$', tags = '' WHERE question_number = 29;
UPDATE questions SET proposition = 'Seja S a parte do plano $2x + 2y + z = 4$ que está no primeiro octante.
(a) Parametrize S.
(b) Calcule a área de S.', step_by_step = '', answer = '', tags = '' WHERE question_number = 30;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 31;
UPDATE questions SET proposition = '$$\int \frac{1}{4y-8}\,dy$$', step_by_step = '$$\int \frac{1}{4y-8}\,dy$$
$$u = 4y - 8$$
$$\frac{du}{dy} = 4 \implies dy = \frac{1}{4}du$$
$$\int \frac{1}{u}\,\frac{1}{4} du = \frac{1}{4}\int u^{-1}\,du = \frac{1}{4}\ln u + C = \frac{1}{4}\ln(4y-8) + C$$', answer = '$$\frac{1}{4}\ln|4y - 8| + c = \frac{1}{4}\ln|y - 2| + c''$$', tags = 'ps17' WHERE question_number = 32;
UPDATE questions SET proposition = '$$\int y^5 e^y \, dy$$', step_by_step = '$$\int y^5 e^y \, dy$$
Integration by parts
$$\int u\,v'' = u v - \int u'' v$$
$$u = y^5,\quad v'' = e^y$$
$$u'' = 5y^4,\quad v = e^y$$
$$\int y^5 e^y \, dy = y^5 e^y - \int 5y^4 e^y \, dy$$
$$I_k = y^k e^y - k \int y^{k-1} e^y \, dy = y^k e^y - k I_{k-1}$$
$$I_1 = y e^y - e^y$$
$$I_2 = y^2 e^y - 2I_1$$
$$I_3 = y^3 e^y - 3I_2$$
$$I_4 = y^4 e^y - 4I_3$$
$$I_5 = y^5 e^y - 5I_4$$
$$y^5 e^y - 5\bigl(y^4 e^y - 4\bigl(y^3 e^y - 3\bigl(y^2 e^y - 2(y e^y - e^y)\bigr)\bigr)\bigr)$$
$$y^5 e^y - 5y^4 e^y + 20y^3 e^y - 60y^2 e^y + 120y e^y - 120e^y$$
$$e^y\bigl(y^5 - 5y^4 + 20y^3 - 60y^2 + 120y - 120\bigr) + C$$', answer = '$$e^y\bigl(y^5 - 5y^4 + 20y^3 - 60y^2 + 120y - 120\bigr) + C$$', tags = 'ps17' WHERE question_number = 33;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 34;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 35;
UPDATE questions SET proposition = '$$\int \sin^3(x)\,dx$$
$$\int \cos^3(x)\,dx$$', step_by_step = '- $\int \sin^3(x)\,dx$
- $= \int \sin^2(x)\,\sin(x)\,dx$
- $= \int (1 - \cos^2(x))\,\sin(x)\,dx$
- $= \int (1 - u^2)\,\sin(x)\,\frac{1}{-\,\sin(x)}\,du$
- $= \int (1 - u^2)\,(-1)\,du$
- $= -\int 1\,du + \int u^2\,du$
- $= -\cos(x) + \frac{\cos^3(x)}{3} + C$

- $\sin^2 + \cos^2 = 1 \implies \sin^2 = 1 - \cos^2$
- $u = \cos(x)$
- $\frac{du}{dx} = -\sin(x) \implies dx = -\frac{1}{\sin(x)}\,du$


- $\int \cos^3(x)\,dx$
- $= \int \cos^2(x)\,\cos(x)\,dx$
- $= \int (1 - \sin^2(x))\,\cos(x)\,dx$
- $= \int (1 - u^2)\,\cos(x)\,\frac{1}{\cos(x)}\,du$
- $= \int 1\,du - \int u^2\,du$
- $= \sin(x) - \frac{\sin^3(x)}{3} + C$

- $\sin^2 + \cos^2 = 1 \implies \cos^2 = 1 - \sin^2$
- $u = \sin(x)$
- $\frac{du}{dx} = \cos(x) \implies dx = \frac{1}{\cos(x)}\,du$', answer = '$$\int \sin^3(x)\,dx = -\cos(x) + \frac{\cos^3(x)}{3} + C$$
$$\int \cos^3(x)\,dx = \sin(x) - \frac{\sin^3(x)}{3} + C$$', tags = 'ps17' WHERE question_number = 36;
UPDATE questions SET proposition = '- Solve this differential equation:
$$\frac{dy}{dx} - x - x^2 = 0$$
where
$$y(0) = 1$$', step_by_step = '1. Multiply both sides by $dx$:
$$dy - x\,dx - x^2\,dx = 0$$

2. Separate $x$ and $y$ terms on different sides of the equal sign:
$$dy = x\,dx + x^2\,dx$$

3. Then integrate to get
$$y = \frac{x^2}{2} + \frac{x^3}{3} + c$$

4. Apply the initial conditions to find that $c = 1$

5. Tada! The solution is
$$y = \frac{x^2}{2} + \frac{x^3}{3} + 1$$', answer = '$$y = \frac{x^2}{2} + \frac{x^3}{3} + 1$$', tags = '' WHERE question_number = 37;
UPDATE questions SET proposition = 'Find an implicit solution to this differential equation:

$$(y - y^2)\frac{dy}{dx} - x^2 = 0$$', step_by_step = '1. Multiply both sides by dx:

$$(y - y^2)\,dy - x^2\,dx = 0$$

2. Separate x and y terms on different sides of the equal sign:

$$(y - y^2)\,dy = x^2\,dx$$

3. Integrate to get

$$\frac{y^2}{2} - \frac{y^3}{3} = \frac{x^3}{3} + c$$', answer = '$$\frac{y^2}{2} - \frac{y^3}{3} = \frac{x^3}{3} + c$$', tags = '' WHERE question_number = 38;
UPDATE questions SET proposition = 'Solve this differential equation by converting it into a separable form:
$$
\frac{dy}{dx} = \frac{x^4 + 2y^4}{xy^3}
$$', step_by_step = '', answer = '$$y = \left( c x^8 - x^4 \right)^{1/4}$$', tags = '' WHERE question_number = 39;
UPDATE questions SET proposition = 'O deslocamento de um objeto oscilando em função do tempo é mostrado na figura. Quais são  
(a) a frequência;  
(b) a amplitude;  
(c) o período;  
(d) a frequência angular desse movimento?

![[CAL/question-images/q40.png]]', step_by_step = '', answer = '- (a) Frequência: $\dfrac{1}{16}$ Hz  
A frequência é medida em hertz (Hz), e o valor fornecido é $\dfrac{1}{16}$.

- (b) Amplitude: 10 cm  
A amplitude geralmente é dada em unidades de comprimento, como centímetros (cm), e o valor fornecido é 10.

- (c) Período: 16 s  
O período é medido em segundos (s), e o valor fornecido é 16.

- (d) Frequência Angular: $\dfrac{\pi}{8}$ rad/s  
A frequência angular é expressa em radianos por segundo (rad/s), e o valor fornecido é $\dfrac{\pi}{8}$.', tags = '' WHERE question_number = 40;
UPDATE questions SET proposition = 'Quando uma massa de 0,750 kg oscila em uma mola ideal, a frequência é igual a 1,33 Hz.  
Qual será a frequência se 0,220 kg forem adicionados à massa original,  
e (b) subtraídos à massa original?  

Tente resolver este problema sem achar a constante da mola.', step_by_step = '', answer = '- $\dfrac{f_2}{f_1} = \sqrt{\dfrac{m_1}{m_2}} \Rightarrow f_2 = f_1 \sqrt{\dfrac{m_1}{m_2}}$

- $f_2 = 1{,}17$ Hz

- $f_3 = 1{,}58$ Hz', tags = '' WHERE question_number = 41;
UPDATE questions SET proposition = 'Um bloco de $2,0\ \mathrm{kg}$ sem atrito está preso a uma mola ideal cuja constante é igual a $300\ \mathrm{N/m}$. Em $t = 0$ a mola não está comprimida nem esticada, e o bloco se move no sentido negativo com $12,0\ \mathrm{m/s}$. Ache
- a) amplitude
- b) o ângulo de fase
- c) Escreva a equação para a posição em função do tempo.', step_by_step = '', answer = 'a) $\frac{12}{\sqrt{150}}$ rad/s
b) $\frac{\pi}{2}$
c) $x(t) = \frac{12}{\sqrt{150}} \sin(\sqrt{150}t + \frac{\pi}{2})$', tags = '' WHERE question_number = 42;
UPDATE questions SET proposition = 'Uma massa de $1,50\ \mathrm{kg}$ oscilando em uma mola tem o deslocamento em função do tempo dado pela equação

$$
x(t) = (7,40\ \mathrm{cm}) \cos\bigl[(4,16\ \mathrm{s}^{-1})\,t - 2,42\bigr].
$$
Encontre
- (a) o tempo de uma vibração completa;
- (b) a constante da mola;
- (c) a velocidade máxima da massa;
- (d) a força máxima sobre a massa;
- (e) a posição, velocidade e aceleração da massa em $t = 1,00\ \mathrm{s}$;
- (f) a força sobre a massa nesse instante.', step_by_step = '', answer = '- (a) $T = \frac{2\pi}{\omega} = \frac{2\pi}{4,16\ \mathrm{s}^{-1}} = 1,510\ \mathrm{s}$
- (b) $\omega = \sqrt{\frac{k}{m}} \quad \Rightarrow \quad k = m\,\omega^2 = 1,50\ \mathrm{kg} \cdot (4,16\ \mathrm{s}^{-1})^2 = 25,958\ \mathrm{N/m}$
- (c) $v_{\max} = A\,\omega = 0,074\ \mathrm{m} \cdot 4,16\ \mathrm{s}^{-1} = 0,308\ \mathrm{m/s}$
- (d) $F_{\max} = A\,k = 0,074\ \mathrm{m} \cdot 25,958\ \mathrm{N/m} = 1,921\ \mathrm{N}$
- (e) No MHS:

  $$
  \begin{aligned}
  x(t) &= A \cos(\omega t + \varphi),\\
  v(t) &= -\,A\,\omega \sin(\omega t + \varphi),\\
  a(t) &= -\,\omega^2\,x(t).
  \end{aligned}
  $$

  Para $t = 1{,}00\ \mathrm{s}$ e $\varphi = -2{,}42$:
  $$
  x(1) \;=\; 0{,}074 \cos\bigl(4{,}16 \cdot 1 - 2{,}42\bigr) \;=\; -0{,}012\ \mathrm{m},
  $$$$
  v(1) \;=\; -\,0{,}074 \cdot 4{,}16 \,\sin\bigl(4{,}16 - 2{,}42\bigr) \;=\; -0{,}303\ \mathrm{m/s},
  $$$$
  a(1) \;=\; -\,(4{,}16)^2 \cdot (-0{,}012) \;=\; 0{,}216\ \mathrm{m/s^2}.
  $$
- (f) $F(1) = m\,a(1) = 1{,}50\ \mathrm{kg} \cdot 0{,}216\ \mathrm{m/s^2} = 0{,}324\ \mathrm{N}$', tags = '' WHERE question_number = 43;
UPDATE questions SET proposition = 'Um oscilador harmônico possui frequência $\omega$ e amplitude $A$. 
- (a) Quais são os valores dos módulos da posição e da velocidade quando a energia potencial elástica for igual à energia cinética? (Suponha que $U = 0$ no equilíbrio).
- (b) Quantas vezes isso ocorre em cada ciclo? Qual é o intervalo de tempo entre duas ocorrências consecutivas?
- (c) No momento em que o deslocamento é igual a $A/2$, qual é a fração da energia total do sistema referente à energia cinética e a qual fração corresponde à energia potencial?', step_by_step = '', answer = '- $E = K + U$
- $K = \frac{1}{2} m v^2$
- $U = \frac{1}{2} k x^2$

- $E = K_{\max} + 0 = \frac{1}{2} m \,(v_{\max})^2 = \frac{1}{2} m \,(A \,\omega)^2 = \frac{1}{2} m \,A^2 \,\omega^2$

- $E = 0 + U_{\max} = \frac{1}{2} k \,A^2$

- Se $U = K$, então 
$$
E = K + U = 2K \;\;\Longrightarrow\;\; 2 \cdot \frac{1}{2} m v^2 = m v^2 = E = \frac{1}{2} m A^2 \omega^2
$$

- Logo, 
$$
m v^2 = \frac{1}{2} m A^2 \omega^2 
\;\;\Longrightarrow\;\;
v = \pm \frac{A \,\omega}{\sqrt{2}}
$$

- Da mesma forma, se $U = K$, 
$$
E = K + U = 2U 
\;\;\Longrightarrow\;\;
2 \cdot \frac{1}{2} k x^2 = k x^2 = E = \frac{1}{2} k A^2
$$

- Logo, 
$$
k x^2 = \frac{1}{2} k A^2 
\;\;\Longrightarrow\;\;
x = \pm \frac{A}{\sqrt{2}}
$$

- Ocorre $4$ vezes por ciclo.

- $x(t) = A \cos\bigl(\omega t + \varphi\bigr)$. Para $x = \pm A/\sqrt{2}$, temos 
$$
\cos(\omega t + \varphi) = \pm \frac{\sqrt{2}}{2},
$$ 
então 
$$
\omega t + \varphi = \arccos\!\Bigl(\pm \frac{\sqrt{2}}{2}\Bigr) \in \Bigl\{\tfrac{\pi}{4},\,\tfrac{3\pi}{4},\,\tfrac{5\pi}{4},\,\tfrac{7\pi}{4}\Bigr\}.
$$

- $T = \frac{2\pi}{\omega}$ e $\Delta t = \frac{\pi}{2\,\omega} = \frac{1}{4}\,T$.

- $U\bigl(A/2\bigr) = \frac{1}{2} k \bigl(\tfrac{A}{2}\bigr)^2 = \frac{1}{8} k A^2$, e $U(A) = \frac{1}{2} k A^2$. Logo, 
$$
\frac{U(A/2)}{U(A)} = \frac{\tfrac{1}{8} k A^2}{\tfrac{1}{2} k A^2} = \frac{1}{4}.
$$

- A fração restante para energia cinética: $1 - \tfrac{1}{4} = \tfrac{3}{4}$.

- Portanto, em $x = A/2$, $\tfrac{1}{4}$ da energia está em potencial e $\tfrac{3}{4}$ em cinética.', tags = '' WHERE question_number = 44;
UPDATE questions SET proposition = 'Um corpo de $0,500\,\mathrm{kg}$, ligado à extremidade de uma mola ideal de constante $k = 450\,\mathrm{N/m}$, executa um movimento harmônico simples com amplitude igual a $0,040\,\mathrm{m}$. Calcule:
- a) a velocidade máxima do cavaleiro;
- b) a velocidade do cavaleiro quando ele está no ponto $x = -0,015\,\mathrm{m}$;
- c) o módulo da aceleração máxima do cavaleiro;
- d) a aceleração do cavaleiro quando ele está no ponto $x = -0,015\,\mathrm{m}$;
- e) a energia mecânica total do cavaleiro quando ele está em qualquer ponto.', step_by_step = '- $m = 0,5\,\mathrm{kg}$
- $k = 450\,\mathrm{N/m}$
- $A = 0,04\,\mathrm{m}$
- $\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{450}{0,5}} = 30\,\mathrm{rad/s}$
- $|v_{\max}| = A\,\omega = 0,04 \cdot 30 = 1,2\,\mathrm{m/s}$
- $v(x) = \omega \sqrt{A^2 - x^2}$
- $v(-0,015) = 30 \sqrt{0,04^2 - (-0,015)^2} = 1,112\,\mathrm{m/s}$
- $|a_{\max}| = A\,\omega^2 = 0,04 \cdot 30^2 = 36\,\mathrm{m/s}^2$
- $a(x) = -\omega^2 x$
- $a(-0,015) = -30^2 \cdot (-0,015) = 13,5\,\mathrm{m/s}^2$
- $E = K + U = K_{\max} = \frac{1}{2} m\,|v_{\max}|^2 = \frac{1}{2} \cdot 0,5 \cdot 1,2^2 = 0,36\,\mathrm{J}$', answer = 'a) $v_{\max} = 1,2\,\mathrm{m/s}$  
b) $v \approx 1,11\,\mathrm{m/s}$ (em $x = -0,015\,\mathrm{m}$)  
c) $|a_{\max}| = 36\,\mathrm{m/s}^2$  
d) $a = +13,5\,\mathrm{m/s}^2$ (em $x = -0,015\,\mathrm{m}$)  
e) $E = 0,36\,\mathrm{J}$', tags = '' WHERE question_number = 45;
UPDATE questions SET proposition = 'Uma bola de $1,50\,\mathrm{kg}$ e outra de $2,0\,\mathrm{kg}$ são coladas uma na outra, a mais leve embaixo da mais pesada. A bola de cima é presa a uma mola vertical ideal de constante $165\,\mathrm{N/m}$, e o sistema está vibrando verticalmente com uma amplitude de $15,0\,\mathrm{cm}$. A cola usada para juntar as bolas é velha e fraca, e cede de repente, quando as bolas estão na posição mais baixa de seu movimento.
- a) Por que é mais provável que a cola ceda no ponto mais baixo e não em qualquer outro ponto do movimento?
- b) Calcule a amplitude e a frequência das vibrações depois que a bola de baixo houver se soltado.', step_by_step = '', answer = 'a) Pois é quando a força restauradora da mola é máxima e oposta à força peso.

b) O sistema está em equilíbrio quando $F_k = F_g$:
- $-\,k\,x = -\,m\,g$
- $x = \frac{m\,g}{k}$
- $x_{\text{eq1}} = \frac{(2 + 1,5)\,\cdot 10}{165} = 21,21\,\mathrm{cm}$
- $x_{\text{eq2}} = \frac{2\,\cdot 10}{165} = 12,12\,\mathrm{cm}$
- $\omega = \sqrt{\frac{k}{m}}$
- $\omega_2 = \sqrt{\frac{165}{2}} = 9,08\,\mathrm{rad/s}$
- $A_2 = A_1 + \bigl(x_{\text{eq1}} - x_{\text{eq2}}\bigr) = 15 + (21,21 - 12,12) = 24,09\,\mathrm{cm}$

![[q46.png]]', tags = '' WHERE question_number = 46;
UPDATE questions SET proposition = 'Você deseja determinar o momento de inércia de certa parte complicada de uma máquina em relação a um eixo passando em seu centro de massa. Você suspende o objeto por um fio ao longo desse eixo. A constante de torção do fio é igual a $0,450\,\mathrm{N\cdot m/rad}$. Você torce ligeiramente o objeto ao redor desse eixo e o libera, cronometrando 125 oscilações em 265s. Qual é o momento de inércia?', step_by_step = '- $T = \Theta / \omega = 2,65 / 2,25 = 2,12\,s$
- $\omega = 2\pi f = 2\pi (1/T) = 2\pi (1/2,12) = 2,96\,\mathrm{rad/s}$
- $T = 2\pi \sqrt{I/k} \;\to\; I = \frac{2,12^2 \cdot 0,460}{(2\pi)^2} = 0,051\,\mathrm{kg}\cdot\mathrm{m}^2$

- A unidade da constante de torção de um fio é $[\mathrm{N\,m/rad}]$. Isso indica o torque em N\,m necessário para torcer o fio 1 radiano, ou cerca de 57° (já que 180° = $\pi$ radianos).
- Ou seja, a unidade $\mathrm{N\cdot m/rad}$ responde à pergunta: “Quantos newton-metros de torque preciso aplicar para obter exatamente uma variação angular de 1 rad (≈57°) no fio?”



- $I = \frac{T^2\,k}{4\pi^2}$
- $[\mathrm{kg\,m}^2] = [T]^2\,[\mathrm{N\,m/rad}]\;/\;(4\pi^2) = [s]^2\,[\mathrm{kg\,m}/\mathrm{rad}]\;/(4\pi^2) = [\mathrm{kg\,m}^2]$

- Constante de torção $\to$ Momento de inércia
- $[\mathrm{N\,m/rad}]\;\cdot\;[\;?\;]\;\to\;[\mathrm{kg\,m}^2]$
- $[\mathrm{kg\,m\,m}/s^2]\;\cdot\;[s^2]\;\to\;[\mathrm{kg\,m}^2]$
- $k \cdot T^2 \;\to\; I$
- $I = \frac{k\,T^2}{(2\pi)^2}$


- $T = 2\pi \sqrt{I/k}$
- $T = 2\pi \sqrt{m/k}$
- $T = 2\pi \sqrt{J/k}$






![[q47.png]]', answer = '$$0,051 \,kg\,m^2$$




- A unidade do momento de inércia é $\displaystyle [\mathrm{kg\cdot m^2}]$. Em termos de torque e aceleração angular, isso também pode ser visto como $\mathrm{N\cdot m/(rad/s^2)}$, pois a relação básica de rotação é $τ  =  $$I α, \tau \;=\; I\,\alpha,τ=Iα$$ 
- onde $\tau$ é o torque (em N·m), $I$ é o momento de inércia (em kg·m²) e $\alpha$ é a aceleração angular (em rad/s²). Como o radiano é adimensional, $\mathrm{N\cdot m/(rad/s^2)}$ simplifica-se para $\mathrm{N\cdot m\cdot s^2}$, que equivale a $\mathrm{kg\cdot m^2}$.
   
- Ou seja, o valor numérico do momento de inércia responde à pergunta: “Quantos newton‐metros de torque preciso aplicar para obter exatamente uma aceleração angular de 1 rad/s² no corpo?” Por exemplo, se um bloco rígido tiver momento de inércia $I = 3;\mathrm{kg\cdot m^2}$, aplicar um torque de $3;\mathrm{N\cdot m}$ lhe dará $\alpha = 1;\mathrm{rad/s^2}$; se quisermos $\alpha = 0{,}5;\mathrm{rad/s^2}$, bastarão $1{,}5;\mathrm{N\cdot m}$, e assim por diante.', tags = '' WHERE question_number = 47;
UPDATE questions SET proposition = 'Um pêndulo em Marte. Um pêndulo simples possui na Terra um período igual a $1,60\,s$. Qual é o período na superfície de Marte onde $g = 3,71\,m/s^2$?', step_by_step = '$T_2/T_1 = \sqrt{g_1/g_2} \to T_2 = T_1\sqrt{g_1/g_2} = 2,6\,s$', answer = '$$2,6s$$', tags = '' WHERE question_number = 48;
UPDATE questions SET proposition = 'Uma pequena esfera de massa $m$ está presa a uma barra de comprimento $L$ com um pivô em sua extremidade superior, formando um pêndulo simples. O pêndulo é puxado lateralmente até um ângulo $\Theta$ com a vertical e a seguir é liberado a partir do repouso.
- a) Desenhe um diagrama mostrando o pêndulo logo após o instante em que ele é liberado. No diagrama, desenhe vetores representando as forças que atuam sobre a esfera e a aceleração da esfera. A precisão é importante! Nesse ponto, qual é a aceleração linear da esfera?
- b) Repita a parte (a) para o instante em que o pêndulo forma um ângulo $\Theta/2$ com a vertical.
- c) Repita a parte (a) para o instante em que o pêndulo está na direção vertical. Nesse ponto, qual é a velocidade linear da esfera?', step_by_step = '- $a = g \sin(\theta)$
- $E = K + U = K_{\max} = U_{\max}$
- $K_{\max} = \frac{1}{2} m \lvert v_{\max} \rvert^2$
- $U_{\max} = m g h = m g (L - v)$
- $\cos(\theta) = \frac{v}{L} \;\to\; v = L \cos(\theta)$
- $U_{\max} = m g \bigl(L - L \cos(\theta)\bigr) = m g L (1 - \cos(\theta))$
- $K_{\max} = U_{\max}$
- $\frac{1}{2} m \lvert v_{\max} \rvert^2 = m g L (1 - \cos(\theta))$
- $v_{\max} = \sqrt{2\,m\,g\,L\,\bigl(1 - \cos(\theta)\bigr)}$', answer = '$$a = g \sin(\theta)$$
$$v_{\max} = \sqrt{2\,m\,g\,L\,\bigl(1 - \cos(\theta)\bigr)}$$

![[q49.png]]', tags = '' WHERE question_number = 49;
UPDATE questions SET proposition = '- O movimento de um oscilador com subamortecimento é descrito pela equação abaixo Considere o ângulo de fase $\phi$ igual a zero.

$$
x = A e^{-\frac{b}{2m}t} \cos\bigl(\omega'' t + \phi\bigr)
$$

- a) De acordo com esta equação, qual é o valor de $x$ em $t = 0$?
- b) Qual é o módulo, a direção e o sentido da velocidade em $t = 0$? O que esse resultado informa sobre a inclinação do gráfico de $x$ em função de $t$ nas vizinhanças de $t = 0$?
- c) Obtenha uma expressão para a aceleração $a_x$ para $t = 0$. Para que valores ou intervalo de valores da constante de amortecimento $b$ (em termos de $k$ e de $m$) é a aceleração para $t = 0$ negativa, nula e positiva? Discuta cada caso em termos do gráfico de $x$ em função de $t$ nas vizinhanças de $t = 0$.', step_by_step = '', answer = '', tags = '' WHERE question_number = 50;
UPDATE questions SET proposition = 'Uma força propulsora variando senoidalmente é aplicada a um oscilador harmônico amortecido. 
a) Quais são as unidades da constante de amortecimento $b$? 
b) Mostre que a grandeza $\sqrt{k\,m}$ possui as mesmas dimensões de $b$. 
c) Em termos de $F_{\max}$ e de $k$, qual é a amplitude para $\omega = \sqrt{k/m}$ quando 
	i) $b = 0{,}2\,\sqrt{k\,m}$ e 
	ii) $b = 0{,}4\,\sqrt{k\,m}$? Compare seus resultados com a Figura 13.28.

![[CAL/question-images/q51.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 51;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 52;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 53;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 54;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 55;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 56;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 57;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 58;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 59;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 60;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 61;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 62;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 63;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 64;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 65;
UPDATE questions SET proposition = '$$ \int \frac{1}{3 – y}\,dy $$', step_by_step = '', answer = '$$ -\ln\bigl|3 - y\bigr| + C $$', tags = 'ps17' WHERE question_number = 66;
UPDATE questions SET proposition = '$$ \int \cos^2(t)\,dt $$', step_by_step = '', answer = '$$ \frac{1}{2}t + \frac{1}{4}\sin\bigl(2t\bigr) + C $$', tags = 'ps17' WHERE question_number = 67;
UPDATE questions SET proposition = 'Let’s reinterpret $F$ not as a velocity but as a **force** field, so that the line‐integral gives you **work in joules**.  Recall that  
$$
1\;\mathrm N = 1\;\frac{\mathrm J}{\mathrm m}.
$$

---

**1. Define a conservative force field**  
Let $x,y$ be in meters $[\mathrm m]$.  Set
$$
\mathbf F(x,y)
=\bigl\langle P(x,y),\,Q(x,y)\bigr\rangle
=\Bigl\langle (2x - 3y)\,\tfrac{\mathrm J}{\mathrm m},\;(-3x + 5)\,\tfrac{\mathrm J}{\mathrm m}\Bigr\rangle
\quad\bigl[\mathrm N = \tfrac{\mathrm J}{\mathrm m}\bigr].
$$
ChatGPT, add an example of a point in this force field. like, how many newtons in each axis are acting in the boat. and convert it to an angle, for example, x N at y degrees

- **Check conservativity**:  
$$ \displaystyle \frac{\partial P}{\partial y}
  = -3\,\frac{\mathrm J}{\mathrm m^2}
  = \frac{\partial Q}{\partial x} $$  
---

**2. Find the potential energy $U(x,y)$ $[\mathrm J]$**  
We require  
$$
\frac{\partial U}{\partial x}
= P(x,y)
= (2x-3y)\,\frac{\mathrm J}{\mathrm m},
\quad
\frac{\partial U}{\partial y}
= Q(x,y)
= (-3x+5)\,\frac{\mathrm J}{\mathrm m}.
$$
Integrate w.r.t.\ $x$:
$$
U(x,y)
=\int (2x-3y)\,\frac{\mathrm J}{\mathrm m}\,dx
=x^2 -3xy + g(y)\quad[\mathrm J].
$$
Then
$$
\frac{\partial U}{\partial y}
=-3x + g''(y)
\overset!=-3x+5\quad\Longrightarrow\quad
g''(y)=5
\;\Longrightarrow\;
g(y)=5y.
$$
Hence
$$
\boxed{\,U(x,y)=x^2 \;-\;3xy\;+\;5y\quad\bigl[\mathrm J\bigr].}
$$

---

**3. Choose a path**  
Let the boat move along
$$
r(t)=(x(t),y(t))=(t,\;t^2)\quad[\mathrm m],\quad t\in[1,2].
$$
Then
$$
dx = dt\,[\mathrm m],\quad
dy = 2t\,dt\,[\mathrm m].
$$

---

### A. Direct line‐integral (work)
$$
\begin{aligned}
\int_C \mathbf F\cdot d\mathbf r
&=\int_{t=1}^{2}\!\Bigl[P\,\frac{dx}{dt}+Q\,\frac{dy}{dt}\Bigr]\,dt\\
&=\int_{1}^{2}\!\Bigl[(2t-3t^2)+( -3t+5)\cdot(2t)\Bigr]\,dt\;\mathrm J\\
&=\int_{1}^{2}(12t -9t^2)\,dt
=\bigl[6t^2-3t^3\bigr]_{1}^{2}
=-3\;\mathrm J.
\end{aligned}
$$

---

### B. Via the Fundamental Theorem for Conservative Fields
$$
\int_C\mathbf F\cdot d\mathbf r
=U\bigl(r(2)\bigr)-U\bigl(r(1)\bigr)
=U(2,4)-U(1,1)
=\bigl(4-24+20\bigr)-\bigl(1-3+5\bigr)
=0-3
=-3\;\mathrm J.
$$

---

**Physical interpretation:**  
The conservative force field does $-3$ J of work along that curve—i.e.\ you must supply $+3$ J of external work to drag the boat from $(1,1)$ m to $(2,4)$ m against this force.', step_by_step = '', answer = '', tags = '' WHERE question_number = 69;
UPDATE questions SET proposition = '$$
2y'''' - 5y'' - 3y = 0
$$', step_by_step = 'A equação característica é
$$
2r^2 - 5r - 3 = 0.
$$

As raízes desta equação do segundo grau são
$$
r = \frac{5 \pm \sqrt{25 - 4 \cdot 2 \cdot (-3)}}{4} = \frac{5 \pm 7}{4}.
$$

Temos duas raízes reais e distintas $r_1 = 3$ e $r_2 = -1/2$. Portanto, a solução geral da equação dada é
$$
y = c_1 e^{3x} + c_2 e^{-x/2}
$$
com $c_1$, $c_2$ constantes.', answer = '$$
y = c_1 e^{3x} + c_2 e^{-x/2}
$$', tags = 'ps12' WHERE question_number = 72;
UPDATE questions SET proposition = '$$
y'''' + 5y'' + 6y = 0, \quad y(0) = 2 \quad \text{e} \quad y''(0) = 3
$$', step_by_step = 'A equação característica é
$$
r^2 + 5r + 6 = 0
$$
e suas raízes são
$$
r = \frac{-5 \pm \sqrt{25 - 4 \cdot 1 \cdot 6}}{2} = \frac{-5 \pm 1}{2}.
$$

Temos duas raízes reais e distintas $r_1 = -2$ e $r_2 = -3$. Portanto, a solução geral da equação dada é
$$
y(x) = c_1 e^{-2x} + c_2 e^{-3x},
$$
com $c_1$, $c_2$ constantes.

Impondo a condição inicial $y(0) = 2$, implica
$$
c_1 e^0 + c_2 e^0 = 2 \quad\Longrightarrow\quad c_1 + c_2 = 2. \quad (*)
$$

Por outro lado, a derivada de $y$ é
$$
y''(x) = -2c_1 e^{-2x} - 3c_2 e^{-3x}.
$$
Usando a outra condição inicial $y''(0) = 3$, vem que
$$
-2c_1 e^0 - 3c_2 e^0 = 3 \quad\Longrightarrow\quad -2c_1 - 3c_2 = 3. \quad (**)
$$

De $(*)$ e $(**)$, obtém-se $c_1 = 9$ e $c_2 = -7$.

Portanto, a solução do PVI é
$$
y(x) = 9e^{-2x} - 7e^{-3x}, \qquad x \in (-\infty, \infty).
$$', answer = '$$
y(x) = 9e^{-2x} - 7e^{-3x}, \qquad x \in (-\infty, \infty).
$$', tags = 'ps12' WHERE question_number = 73;
UPDATE questions SET proposition = 'Determine a solução geral da EDO
$$
y'''' + y'' + y = 0.
$$', step_by_step = 'A equação característica é
$$
r^2 + r + 1 = 0.
$$

As raízes desta equação são (usando $i = \sqrt{-1}$):
$$
r = \frac{-1 \pm \sqrt{1 - 4 \cdot 1 \cdot 1}}{2}
= \frac{-1 \pm \sqrt{3}i}{2}.
$$

Temos duas raízes complexas $r_1 = \frac{-1 + \sqrt{3}\,i}{2}$ e $r_2 = \frac{-1 - \sqrt{3}\,i}{2}$. Portanto, a solução geral da equação é
$$
y = c_1 e^{-x/2} \cos\left( \frac{\sqrt{3}x}{2} \right) + c_2 e^{-x/2} \sin\left( \frac{\sqrt{3}x}{2} \right),
$$
com $c_1$, $c_2$ constantes.', answer = '$$
y = c_1 e^{-x/2} \cos\left( \frac{\sqrt{3}x}{2} \right) + c_2 e^{-x/2} \sin\left( \frac{\sqrt{3}x}{2} \right),
$$', tags = 'ps12' WHERE question_number = 74;
UPDATE questions SET proposition = 'Encontre a solução do PVI

$$
y'''' - 4y'' + 5y = 0, \quad y(0) = 1 \quad \text{e} \quad y''(0) = 5.
$$', step_by_step = 'A equação característica é

$$
r^2 - 4r + 5 = 0
$$

e suas raízes são dadas por (usando $i = \sqrt{-1}$):

$$
r = \frac{4 \pm \sqrt{16 - 4\cdot 5}}{2} = \frac{4 \pm \sqrt{-4}}{2} = 2 \pm i.
$$

Temos duas raízes complexas $r_1 = 2+i$ e $r_2 = 2-i$.  
Portanto, a solução geral da equação é

$$
y(x) = c_1 e^{2x} \cos x + c_2 e^{2x} \sin x,
$$

com $c_1$, $c_2$ constantes.

Impondo a condição inicial $y(0) = 1$, implica

$$
c_1 e^{0} \cos 0 + c_2 e^{0} \sin 0 = 1
\quad \Rightarrow \quad
c_1 = 1. \tag{*}
$$

Por outro lado, a derivada de $y$ é

$$
y''(x) = c_1 (2e^{2x} \cos x - e^{2x} \sin x) + c_2 (2e^{2x} \sin x + e^{2x} \cos x).
$$

Usando a outra condição inicial $y''(0) = 5$, vem que

$$
c_1 (2e^{0} \cos 0 - e^{0} \sin 0) + c_2 (2e^{0} \sin 0 + e^{0} \cos 0) = 5,
$$

$$
2c_1 + c_2 = 5. \tag{**}
$$

De $(*)$ e $(**)$ temos $c_1 = 1$ e $c_2 = 3$. Portanto, a solução do PVI é

$$
y(x) = e^{2x} \cos x + 3e^{2x} \sin x, \quad x \in (-\infty, +\infty).
$$', answer = '$$
y(x) = e^{2x} \cos x + 3e^{2x} \sin x, \quad x \in (-\infty, +\infty).
$$', tags = 'ps12' WHERE question_number = 75;
UPDATE questions SET proposition = 'Sabendo que $y_1(x) = e^{-2x}$ é uma solução da EDO

$$
y'''' + 4y'' + 4y = 0
$$

aplique o método da redução de ordem para determinar uma segunda solução $y_2(x)$. Verifique se $y_1$ e $y_2$ são linearmente independentes.  
Encontre a solução geral da EDO.', step_by_step = '', answer = '$$
y_2(x) = y_1(x) \int \frac{e^{-\int p(x)\,dx}}{[y_1(x)]^2}\,dx = e^{-2x} \int \frac{e^{-4x}}{e^{-4x}}\,dx
= e^{-2x} \int dx = e^{-2x} x.
$$

$$
W(y_1(x), y_2(x)) =
\begin{vmatrix}
e^{-2x} & xe^{-2x} \\
-2e^{-2x} & e^{-2x} - 2xe^{-2x}
\end{vmatrix}
= e^{-4x} + 4xe^{-4x} - (-2xe^{-4x})
= e^{-4x} \neq 0, \quad \forall x.
$$

Portanto, $y_1$ e $y_2$ são linearmente independentes.

$$
y(x) = c_1 e^{-2x} + c_2 xe^{-2x},
$$', tags = 'ps12' WHERE question_number = 76;
UPDATE questions SET proposition = 'Determine a solução do PVI
$$
y'''' + 2y'' + y = 0, \quad y(0) = 5 \quad \text{e} \quad y''(0) = -3.
$$', step_by_step = 'A equação característica da EDO é

$$
r^2 + 2r + 1 = (r+1)^2 = 0.
$$

Logo, a única raiz é $r_1 = -1$. A solução geral da EDO é

$$
y(x) = c_1 e^{-x} + c_2 x e^{-x},
$$

em que $c_1$ e $c_2$ são constantes.

Usando a condição inicial,

$$
y(0) = 5 \quad \Rightarrow \quad c_1 = 5. \tag{7}
$$

A derivada de $y(x)$ é

$$
y''(x) = -c_1 e^{-x} + c_2 (e^{-x} - xe^{-x}).
$$

Usando a outra condição inicial,

$$
y''(0) = -3 \quad \Rightarrow \quad -c_1 + c_2 = -3. \tag{8}
$$

De (7) e (8) temos $c_1 = 5$ e $c_2 = 2$.

Portanto, a solução do PVI é

$$
y(x) = 5e^{-x} + 2xe^{-x}.
$$', answer = '$$
y(x) = 5e^{-x} + 2xe^{-x}.
$$', tags = 'ps12' WHERE question_number = 77;
UPDATE questions SET proposition = 'Encontre a solução do PVI
$$
y^{(3)} + 3y'''' - 10y'' = 0, \quad y(0) = 7, \quad y''(0) = 0 \quad \text{e} \quad y''''(0) = 70.
$$', step_by_step = 'A equação característica da EDO é
$$
r^3 + 3r^2 - 10r = 0 \quad \Longrightarrow \quad r(r+5)(r-2) = 0.
$$

Temos 3 raízes reais e distintas $r_1 = 0$, $r_2 = -5$ e $r_3 = 2$.  
Portanto, a solução geral da EDO é
$$
y(x) = c_1 + c_2 e^{-5x} + c_3 e^{2x},
$$
com $c_1$, $c_2$, $c_3$ constantes.

Derivando $y(x)$ duas vezes temos:
$$
y''(x) = -5c_2 e^{-5x} + 2c_3 e^{2x},
$$
$$
y''''(x) = 25c_2 e^{-5x} + 4c_3 e^{2x}.
$$

Usando as 3 condições iniciais dadas, resulta no sistema
$$
\begin{cases}
c_1 + c_2 + c_3 = 7 \\
-5c_2 + 2c_3 = 0 \\
25c_2 + 4c_3 = 70
\end{cases}
$$
cuja solução é $c_1 = 0$, $c_2 = 2$ e $c_3 = 5$.

Concluímos que a solução do PVI é dada por
$$
y(x) = 2e^{-5x} + 5e^{2x}.
$$', answer = '$$
y(x) = 2e^{-5x} + 5e^{2x}.
$$', tags = 'ps12' WHERE question_number = 78;
UPDATE questions SET proposition = 'Encontre a solução geral da EDO
$$
y^{(6)} + 2y^{(4)} + y^{(2)} = 0.
$$', step_by_step = '$\textbf{Resolução:}$ A equação é linear homogênea com coeficientes constantes. A equação característica é
$$
r^6 + 2r^4 + r^2 = r^2(r^2 + 1)^2 = 0.
$$

As raízes são $r_1 = 0$, $r_2 = i$ e $r_3 = -i$, todas de multiplicidade 2.

Para a raiz $r_1 = 0$, uma parte da solução geral é
$$
y_1(x) = c_1 e^{0x} + c_2 x e^{0x} = c_1 + c_2 x
$$

e para as raízes complexas $r_2 = i$ e $r_3 = -i$, uma segunda parte da solução geral é
$$
y_2(x) = c_3 e^{0x} \cos x + c_4 e^{0x} \sin x + x(c_5 e^{0x} \cos x + c_6 e^{0x} \sin x)
$$
$$
= c_3 \cos x + c_4 \sin x + x(c_5 \cos x + c_6 \sin x).
$$

A solução geral da EDO é dada por
$$
y(x) = y_1(x) + y_2(x)
$$
$$
= c_1 + c_2 x + (c_3 + c_5 x) \cos x + (c_4 + c_6 x) \sin x.
$$', answer = '' WHERE question_number = 79;
UPDATE questions SET proposition = 'Encontre uma solução particular da equação não-homogênea
$$
y'''' + 3y'' + 4y = 3x + 2.
$$', step_by_step = 'Se $P(0) \neq 0$: supõe-se $y_p = A_0 + A_1 x + \dots + A_m x^m$

$\textbf{Resposta:}$ Uma solução particular da EDO é
$$
y_p(x) = \frac{3}{4}x - \frac{1}{16}.
$$', answer = '' WHERE question_number = 80;
UPDATE questions SET proposition = 'Encontre uma solução particular da equação não-homogênea
$$
y'''' - 4y = 2e^{3x}.
$$', step_by_step = 'Se $f$ é uma função exponencial da forma
$$
f(x) = ae^{\beta x},
$$
admitimos que uma solução particular é da forma
$$
y_p(x) = Ae^{\beta x}.
$$

$\textbf{Resposta:}$ Uma solução particular da EDO é
$$
y_p(x) = \frac{2}{5} e^{3x}.
$$', answer = '' WHERE question_number = 81;
UPDATE questions SET proposition = 'Resolvа $y'''' + 5y'' + 4y = 5e^{-4x}$', step_by_step = '$\textbf{Resposta:}$ Solução: $y_h = C_1 e^{-x} + C_2 e^{-4x}$

A solução particular $y_p = Ae^{-4x}$ não deve funcionar, pois $-4$ é raiz da equação característica.

Supõe, então, $y_p = A x e^{-4x}$, que derivando e substituindo na EDO, obtém-se $A = -\frac{5}{3}$.

$$
y = C_1 e^{-x} + C_2 e^{-4x} - \frac{5}{3} x e^{-4x}
$$', answer = '' WHERE question_number = 82;
UPDATE questions SET proposition = 'Encontre uma solução particular da equação não-homogênea
$$
3y'''' + y'' - 2y = 2\cos x.
$$', step_by_step = '', answer = '$$
y_p(x) = -\frac{5}{13} \cos x + \frac{1}{13} \sin x.
$$' WHERE question_number = 83;
UPDATE questions SET proposition = 'Resolva $y'''' + 2y'' + 4y = -x e^{2x} + 3e^{2x}$

$$
y_h = C_1 e^{-x} \cos \sqrt{3}x + C_2 e^{-x} \sin \sqrt{3}x
$$', step_by_step = 'Como $P(2) \neq 0$, $y_p = (A_0 + A_1 x) e^{2x}$. Deriva e substitui na EDO:

$$
A_0 = \frac{7}{24}, \quad A_1 = -\frac{1}{12}
$$

$$
y_p = \left( \frac{7}{24} - \frac{1}{12}x \right) e^{2x}
$$', answer = '' WHERE question_number = 84;
UPDATE questions SET proposition = 'Encontre uma solução geral da equação não-homogênea
$$
3y'''' + y'' - 2y = 2x \cos x.
$$', step_by_step = '', answer = 'A solução geral $y(x) = y_h(x) + y_p(x)$ é

$$
y(x) = c_1 e^{-3x} + c_2 e^{2x} + \left( -\frac{5}{13}x + \frac{18}{169} \right) \cos(x) + \left( \frac{1}{13}x + \frac{77}{169} \right) \sin(x).
$$' WHERE question_number = 85;
UPDATE questions SET proposition = 'Sendo $x'', y'', z''$ um giro de $30^\circ$, sentido anti-horário, em torno de $y$, para as componentes de tensão representadas na figura:
1. Escreva o tensor tensão em notação matricial.
2. Determine as componentes de tensão no sistema $x''$, $y''$ e $z''$
3. Represente em forma matricial
4. Represente as componentes nas faces de um cubo (elemento do contínuo) nos eixos $x''$, $y''$ e $z''$

![[q88.png]]', step_by_step = '1. Escreva o tensor tensão em notação matricial.
$$
[\sigma] = 
\begin{bmatrix}
\sigma_{xx} & \tau_{xy} & \tau_{xz} \\
\tau_{yx} & \sigma_{yy} & \tau_{yz} \\
\tau_{zx} & \tau_{zy} & \sigma_{zz}
\end{bmatrix}
=
\begin{bmatrix}
100 & 0 & 120 \\
0 & 20 & 0 \\
120 & 0 & 80
\end{bmatrix} \text{ MPa}.
$$
$$[L] = \begin{pmatrix} \cos (30^{\circ}) & 0 & \sin (30^{\circ}) \\ 0 & 1 & 0 \\ -\sin (30^{\circ}) & 0 & \cos (30^{\circ}) \end{pmatrix}$$

Cálculo das matrizes
- https://matrixcalc.org/pt/#%7B%7Bcos%28%2830%29%C2%B0%29,0,sin%28%2830%29%C2%B0%29%7D,%7B0,1,0%7D,%7B-sin%28%2830%29%C2%B0%29,0,cos%28%2830%29%C2%B0%29%7D%7D*%7B%7B100,0,120%7D,%7B0,20,0%7D,%7B120,0,80%7D%7D*transpose%28%7B%7Bcos%28%2830%29%C2%B0%29,0,sin%28%2830%29%C2%B0%29%7D,%7B0,1,0%7D,%7B-sin%28%2830%29%C2%B0%29,0,cos%28%2830%29%C2%B°%29%7D%7D%29', answer = '$$\sigma'' = \begin{bmatrix} 198.923 & 0 & 51.340 \\ 0 & 20 & 0 \\ 51.340 & 0 & -18.923 \end{bmatrix} \text{MPa}$$', tags = 'ps4' WHERE question_number = 88;
UPDATE questions SET proposition = 'Sendo $x'', y'', z''$ um giro de $30^\circ$, sentido anti-horário, em torno de $z$, para as componentes de tensão representadas na figura:
1. Escreva o tensor tensão em notação matricial.
2. Determine as componentes de tensão no sistema $x''$, $y''$ e $z''$ indicado.
3. Represente em forma matricial
4. Represente as componentes nas faces de um cubo (elemento do contínuo) nos eixos $x''$, $y''$ e $z''$

![[q88.png]]', step_by_step = '', answer = '$$
\sigma'' = \begin{bmatrix}
80 & -34,64 & 103,92 \\
-34,64 & 40 & -60 \\
103,92 & -60 & 80
\end{bmatrix}\text{ MPa}
$$' WHERE question_number = 90;
UPDATE questions SET proposition = 'Sendo $x'', y'', z''$ um giro de $30^\circ$, sentido anti-horário, em torno de $y$, para as componentes de tensão representadas na figura:
1. Escreva o tensor tensão em notação matricial.
2. Determine as componentes de tensão no sistema $x''$, $y''$ e $z''$ indicado.
3. Represente em forma matricial
4. Represente as componentes nas faces de um cubo (elemento do contínuo) nos eixos $x''$, $y''$ e $z''$

![[q91.png]]', step_by_step = '', answer = '$$
\sigma'' = \begin{bmatrix}
198,9 & 0 & 51,3 \\
0 & 0 & 0 \\
51,3 & 0 & -18,9
\end{bmatrix}\text{ MPa}
$$' WHERE question_number = 91;
UPDATE questions SET proposition = 'Compare [[q88]] com [[q91]] e comente os valores das componentes $\sigma_{xx}$ e $\sigma_{x''x''}$ $\sigma_{zz}$ e $\sigma_{z''z''}$ e $\sigma_{xz}$ e $\sigma_{x''z''}$.', step_by_step = '', answer = 'Pode-se observar que como a rotação em ambas questões acontecem em torno do eixo Y, a magnitude dessa componente não altera os valores das outras tensões ($\sigma_{xx}$ e $\sigma_{x''x''}$ $\sigma_{zz}$ e $\sigma_{z''z''}$ e $\sigma_{xz}$ e $\sigma_{x''z''}$.)', tags = 'ps4' WHERE question_number = 92;
UPDATE questions SET proposition = 'Mostre que para :
$$[\sigma] = \begin{bmatrix}
\sigma_{xx} & \sigma_{xy} & 0 \\
\sigma_{yx} & \sigma_{yy} & 0 \\
0 & 0 & \sigma_{zz}
\end{bmatrix}
\quad e \quad
[L] = \begin{bmatrix}
c & s & 0 \\
-s & c & 0 \\
0 & 0 & 1
\end{bmatrix}$$

$$\sigma_{z''z''} = \sigma_{zz}
\quad e \quad
\begin{bmatrix}
\sigma_{x''x''} & \sigma_{x''y''} \\
\sigma_{y''x''} & \sigma_{y''y''}
\end{bmatrix}
=
\begin{bmatrix}
c & s \\
-s & c
\end{bmatrix}
\begin{bmatrix}
\sigma_{xx} & \sigma_{xy} \\
\sigma_{yx} & \sigma_{yy}
\end{bmatrix}
\begin{bmatrix}
c & -s \\
s & c
\end{bmatrix}$$

onde, $c = \cos(\theta)$ e $s = \sin(\theta)$

sugestão: utilize a equação ![[equations.md#^equationTensorNotation]]', step_by_step = 'Passo 1 – regra geral de mudança de base

Para qualquer tensor de tensões 2--contravariante de posto 2 vale

$[σ''] = [L]\,[σ]\,[L]^{T},$

em que:

- $[L]$ é a matriz de cos-senos diretores do novo sistema $(x'', y'', z'')$ em relação ao antigo $(x, y, z)$;
- $T$ indica transposição.

Passo 2 – escrevendo as matrizes por blocos

A rotação indicada gira apenas em torno do eixo $z$ de um ângulo $θ$. Logo convém separar ambas as matrizes em blocos \"planares\" $(2\times2)$ e o componente normal $z$:

$$
[L] = \begin{bmatrix}
R & 0\\
0 & 1
\end{bmatrix},\quad
R = \begin{bmatrix}
c & s\\
-\,s & c
\end{bmatrix},\quad
[σ] = \begin{bmatrix}
A & 0\\
0 & σ_{zz}
\end{bmatrix},\quad
A = \begin{bmatrix}
σ_{xx} & σ_{xy}\\
σ_{yx} & σ_{yy}
\end{bmatrix}.
$$

Passo 3 – multiplicação dos blocos

Multiplicando:

$$
[\sigma''] = [L]\, [\sigma]\, [L]^{T}
= \begin{bmatrix} R & 0 \\ 0 & 1 \end{bmatrix}
\begin{bmatrix} A & 0 \\ 0 & \sigma_{zz} \end{bmatrix}
\begin{bmatrix} R^{T} & 0 \\ 0 & 1 \end{bmatrix}
= \begin{bmatrix} R A R^{T} & 0 \\ 0 & \sigma_{zz} \end{bmatrix}.
$$

- Componente $zz$:

O bloco inferior-direito permanece $\sigma_{zz}$, logo

$$
\sigma_{z''z''} = \sigma_{zz}.
$$

- Bloco no plano $x''y''$:

O bloco superior-esquerdo é

$$
R A R^{T}
= \begin{bmatrix} c & s \\ -s & c \end{bmatrix}
\begin{bmatrix} \sigma_{xx} & \sigma_{xy} \\ \sigma_{yx} & \sigma_{yy} \end{bmatrix}
\begin{bmatrix} c & -s \\ s & c \end{bmatrix},
$$

o que fornece exatamente

$$
\begin{bmatrix} \sigma_{x''x''} & \sigma_{x''y''} \\ \sigma_{y''x''} & \sigma_{y''y''} \end{bmatrix}
= \begin{bmatrix} c & s \\ -s & c \end{bmatrix}
\begin{bmatrix} \sigma_{xx} & \sigma_{xy} \\ \sigma_{yx} & \sigma_{yy} \end{bmatrix}
\begin{bmatrix} c & -s \\ s & c \end{bmatrix}.
$$', answer = '' WHERE question_number = 93;
UPDATE questions SET proposition = 'Mostre que $\sigma_{x''z''} \neq \sigma_{xz}$ e $\sigma_{y''z''} \neq \sigma_{yz}$

$$[\sigma] = \begin{bmatrix}
\sigma_{xx} & \sigma_{xy} & \sigma_{xz}\\
\sigma_{yx} & \sigma_{yy} & \sigma_{yz}\\
\sigma_{zx} & \sigma_{zy} & \sigma_{zz}
\end{bmatrix}$$', step_by_step = '', answer = '' WHERE question_number = 94;
UPDATE questions SET proposition = 'Para os tensores de tensão a seguir, determine:
a) Componentes principais de tensões
b) Cossenos diretores dos planos principais
c) Máxima componente de cisalhamento em 3D.

$$
[\sigma] = \begin{bmatrix}
200 & 50 & 0\\
50 & -70 & 0\\
0 & 0 & 80
\end{bmatrix} MPa
$$

Use $\det\bigl([\sigma] - \lambda I\bigr) = 0$', step_by_step = '- https://chatgpt.com/g/g-p-680b77df38f081918c2a49aa6b1230ab-random/c/68222809-3438-800c-8938-6256c2ee06a5


A tensão de normal média é a tensão de tração quando a tensão de cisalhamento é máxima', answer = '' WHERE question_number = 95;
UPDATE questions SET proposition = '>[!attention] A versão 2D dessa questão é [[q121]]

Utilizando o círculo de Mohr
Para os tensores de tensão a seguir, determine:
a) Componentes principais de tensões
b) Cossenos diretores dos planos principais e do plano de cisalhamento máximo
c) Máxima componente de cisalhamento em 3D.
$$
[\sigma] = \begin{bmatrix}
200 & 50 & 0\\
50 & -70 & 0\\
0 & 0 & 80
\end{bmatrix} MPa
$$', step_by_step = '', answer = '$$\sigma_1 = 208,962 \, MPa \quad \sigma_{2}=80 \quad\sigma_3 = -78,962 \, MPa \quad \sigma_{\text{médio}} = 65 \, MPa$$$$\vec n_1  = (0.984, 0.176,0) \quad \vec{n}_{2}=(0,0,1) \quad \vec n_{3} = (-0.176, 0.984,0) $$$$\vec n_s (0.821, -0.571)$$$$\tau_{\max}^{(3D)} = \tau_{\max}^{(2D)} = 143,962 \, MPa$$', tags = 'ps10,ps11' WHERE question_number = 96;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 97;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 98;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 99;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 100;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 101;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 102;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 103;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 104;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 105;
UPDATE questions SET proposition = '', step_by_step = '', answer = '', tags = '' WHERE question_number = 106;
UPDATE questions SET proposition = 'Considere a superfície
$$S = \vec r(u,v) = (u^2, v^2, u + 2v)$$
- (a) S é lisa em todo ponto?
- (b) determine o plano tangente à S no ponto $P = (1,1,3)$', step_by_step = '### a)S é lisa em todo ponto?

- Para que a superfície seja lisa em um ponto específico, os vetores tangentes àquele ponto devem não podem ser paralelos, em outras palavras, obrigatoriamente são linearmente independentes (LI).
- Os vetores tangentes à um ponto $(x,y,z)$ qualquer em função de $(u,v)$ são definidos por
$$\vec r_u(u,v) = \left(\frac{\partial \, r_x}{\partial u} \,,\frac{\partial \, r_y}{\partial u} \,, \frac{\partial \, r_z}{\partial u}\right) =(2u,\,0,\,1)$$
$$\vec r_v(u,v)= \left(\frac{\partial \, r_x}{\partial v} \,,\frac{\partial \, r_y}{\partial v} \,, \frac{\partial \, r_z}{\partial v}\right) = (0,\,2v,\,2)$$
- Quando $(u,v) = (0,0)$
$$\vec r_u(0,0) = (0,\,0,\,1) \quad \text{e} \quad \vec r_v(0,0) = (0,\,0,\,2)$$
- Um vetor $\vec A$ é paralelo à um outro vetor $\vec B$ quando a multiplicação de $\vec A$ por um escalar $\alpha$ qualquer é igual a $\vec B$. Como
$$2\,\vec r_u(0,0) = r_v(0,0) \implies \vec r_u \, || \, \vec r_v$$
- Isso mostra que S não é lisa no ponto $(0,0,0) = \vec r(0,0)$ pois $\vec r_u \, || \, \vec r_v$  quando $(u,v) = (0,0)$ 






### b) Determine o plano tangente à S no ponto $P = (1,1,3)$
Para encontrar o plano tangente à um ponto podemos encontrar primeiro o vetor normal à ele. O vetor normal $\vec N$ em um ponto $(x,y,z)$ qualquer na imagem da função $\vec r$ é $\vec r_u \times \vec r_v$ quando $\vec r(u,v) = (x,y,z)$
$$
  \vec N(u,v) =\vec r_u \times \vec r_v
  = \text{\"det\"}
  \begin{vmatrix}
    \mathbf{i} & \mathbf{j} & \mathbf{k} \\
    2u & 0 & 1 \\
    0 & 2v & 2
  \end{vmatrix}
  = (-2v,\,-4u,\,4uv) =(v,\,2u,\,-2uv)
  $$
$$
\vec r(u,v) = (u^2, v^2, u + 2v) = (1,1,3)\;\implies\;
  \begin{cases}
    u^2 = 1 \\
    v^2 = 1 \\
    u + 2v = 3
  \end{cases}
  \;\implies\;
  \begin{cases}
    u = 1 \\
    v = 1
  \end{cases}
  $$

No ponto  $P=(1,1,3)$, $u=1$ e $v=1$, portanto o vetor tangente à esse ponto é
$$\vec N(1,1)  = (1,\,2,\,-2)$$

Um plano $\Pi$ que é tangente à um vetor $\vec N$ possui as mesmas inclinações que $\vec N$, ou seja:
$$\vec N =(a,b,c)$$
$$\Pi: ax +by+cz+d = 0$$
Sendo $d$ um offset vertical do plano que pode ser obtido quando se iguala um plano com inclinações $(a,b,c)$ com 

$$\Pi: x + 2y - 2z + d = 0$$
$$\Pi: d = -x - 2y + 2z$$
Como $(1,\,1,\,3)$ pertence a $\Pi$: $$d = -1\cdot1 - 2\cdot1 + 2\cdot3 = 3$$
Portanto 
$$\Pi:x + 2y - 2z + 3 = 0$$


**Observação:** O plano tangente só existe em um ponto se a curva é lisa naquele ponto. Como no ponto 
$$\vec r(u,v)=(1,1,3) \implies (u,v) = (1,1)$$
$$\vec r_u(1,1) = (2,\,0,\,1) \quad\text{e} \quad \vec r_v(1,1) = (0,\,2,\,2)$$
S é lisa no ponto $(1,\,1,\,3)$ já que $\vec r_u$ e $\vec r_v$ são L.I.', answer = 'a) Ela não é lisa no ponto (0,0,0)
b) $$\Pi:x + 2y - 2z + 3 = 0$$', tags = 'ps22,ps29' WHERE question_number = 107;
UPDATE questions SET proposition = 'Qual a área de uma superfície definida por S: $x^2 + y^2 + z^2 = a^2$', step_by_step = '$$\text{Área(S)} = \iint_D d \vec A(u,v)= \iint_D \|\vec n_u \times \vec n_v\|\, dA(u,v)$$

$$\vec r(\theta,\phi) = \{\,x(\theta,\phi),\;y(\theta,\phi),\;z(\theta,\phi)\},\quad \theta\in[0,2\pi],\ \phi\in[0,\pi]$$

$$\vec r(\theta,\phi) = \{\,a\cos\theta\sin\phi,\;a\sin\theta\sin\phi,\;a\cos\phi\},\quad \theta\in[0,2\pi],\ \phi\in[0,\pi]$$

$$\vec n_\theta = \bigl(\frac{\partial r_x}{\partial\theta},\frac{\partial r_y}{\partial\theta},\frac{\partial r_z}{\partial\theta}\bigr) = (-a\sin\theta\sin\phi,\;a\cos\theta\sin\phi,\;0)$$

$$\vec n_\phi = \bigl(\frac{\partial r_x}{\partial\phi},\frac{\partial r_y}{\partial\phi},\frac{\partial r_z}{\partial\phi}\bigr) = (a\cos\theta\cos\phi,\;a\sin\theta\cos\phi,\;-a\sin\phi)$$

$$\vec n_\theta\times\vec n_\phi
= \text{\"det\"}\begin{bmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
 -a\sin\theta\sin\phi & a\cos\theta\sin\phi & 0 \\
 a\cos\theta\cos\phi & a\sin\theta\cos\phi & -a\sin\phi
\end{bmatrix}$$

$$
\vec n_\theta\times\vec n_\phi
= \bigl(-a^2\cos\theta\sin^2\phi,\;-a^2\sin\theta\sin^2\phi,\;-a^2\sin\phi\cos\phi\bigr)$$

$$\|\vec n_\theta\times\vec n_\phi\|
= \sqrt{a^4\bigl(\cos^2\theta\sin^4\phi + \sin^2\theta\sin^4\phi + \sin^2\phi\cos^2\phi\bigr)}
$$
$$= \sqrt{a^4\bigl(\sin^4\phi + \sin^2\phi\,\cos^2\phi\bigr)}$$
$$= \sqrt{a^4\,\sin^2\phi\bigl(\sin^2\phi + \cos^2\phi\bigr)} = a^2\,\sin\phi$$


$$\text{Área(S)} = \iint_{[0,2\pi]\times[0,\pi]} \|\vec n_\theta\times\vec n_\phi\|\, dA(\theta,\phi)$$

$$
= \int_{0}^{\pi}\int_{0}^{2\pi}a^2\sin\phi\,d\theta\,d\phi
= a^2\int_{0}^{2\pi}d\theta\int_{0}^{\pi}\sin\phi\,d\phi
= a^2\cdot2\pi\cdot[-\cos\phi]_{0}^{\pi}
= 4\pi a^2
$$', answer = '$$4\pi a^2$$', tags = 'ps29' WHERE question_number = 108;
UPDATE questions SET proposition = 'Qual a área da superfície definida por S:  $z = x^2 + y^2$ com $z \le 1$', step_by_step = '### Abordagem paramétrica (ou “integral vetorial de superfície”)
$$\vec r(\theta,h)=(r_x(\theta,h),r_y(\theta,h),r_z(\theta,h))$$
$$\vec r(\theta,h) =\left(h\cos\theta,h\sin\theta,(h\cos\theta)^2+(h\sin\theta)^2\right)$$
$$\vec r(\theta,h) =(h\cos\theta,h\sin\theta,h^2)$$
$$\theta\in[0,2\pi];\ h\in[0,1]$$

$$\iint_Dd\vec A=\iint_D\|\vec r_\theta\times\vec r_h\|\ dA_{(\theta,h)}$$

$$\vec r_\theta=\Bigl(\frac{\partial x}{\partial\theta},\frac{\partial y}{\partial\theta},\frac{\partial z}{\partial\theta}\Bigr)=(-h\sin\theta,h\cos\theta,0)$$

$$\vec r_h=\Bigl(\frac{\partial x}{\partial h},\frac{\partial y}{\partial h},\frac{\partial z}{\partial h}\Bigr)=(\cos\theta,\sin\theta,2 h)$$

$$\vec r_\theta \times \vec r_h
= \begin{bmatrix}
(2h^2\cos\theta)-(0)\\
(0)-(-2h^2\sin\theta)\\
(-h\sin^2\theta)-(h\cos^2\theta)
\end{bmatrix}
=[\,2h^2\cos\theta,\;2h^2\sin\theta,\;-h]$$

$$\|\vec r_\theta\times\vec r_h\|=\sqrt{4h^4+h^2}=h\sqrt{4h^2+1}$$

$$\int_0^{2\pi}\int_0^1h\sqrt{4h^2+1}\,dh\,d\theta
=2\pi \int_0^1 h\sqrt{4h^2+1}\,dh$$

$$u=4h^2+1,\ \frac{du}{dh}=8h,\ dh=\frac{1}{8h}\,du$$

$$\int_0^{2\pi}\int_0^1 h\sqrt{4h^2+1}\,dh
=\frac{2\pi }{8}\int_{1}^{5}\sqrt{u}\,du
=\frac{\pi}{4}\int_1^5u^{1/2}\,du$$

$$\frac{\pi}{4}\Bigl[\frac{u^{3/2}}{\tfrac{3}{2}}\Bigr]_1^5
=\frac{\pi}{6}(5^{3/2}-1)$$


### Abordagem pelo gráfico (ou “forma de Monge”)Qual a área da superfície definida por $S=\{\,z=x^2+y^2,\ z\le1\}$

$$\text{área}(S)=\iint_D\|\mathbf{r}_u\times\mathbf{r}_v\|\,dA_{(u,v)}$$

$$\mathbf{n}=[u,\;v,\;u^2+v^2]$$

$$\mathbf{r}_u=\begin{bmatrix}
\frac{\partial x}{\partial u}\\
\frac{\partial y}{\partial u}\\
\frac{\partial z}{\partial u}
\end{bmatrix}
=
\begin{bmatrix}
1\\
0\\
2u
\end{bmatrix}$$

$$\mathbf{r}_v=\begin{bmatrix}
\frac{\partial x}{\partial v}\\
\frac{\partial y}{\partial v}\\
\frac{\partial z}{\partial v}
\end{bmatrix}
=
\begin{bmatrix}
0\\
1\\
2v
\end{bmatrix}$$

$$\mathbf{r}_u\times\mathbf{r}_v
=\det\begin{bmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\
1&0&2u\\
0&1&2v
\end{bmatrix}=[-2u,-2v,1]$$

$$\|\mathbf{r}_u\times\mathbf{r}_v\|=\sqrt{4u^2+4v^2+1}$$

$$\text{área}(S)
=\iint_{u^2+v^2\le1}\sqrt{4u^2+4v^2+1}\,dA_{(u,v)}$$

A região $D$ é definida por $u^2+v^2\le1$, ou seja, por um círculo de raio 1.

$$u^2+v^2=1^2=r^2$$

$$u=r\cos(\theta),\quad v=r\sin(\theta),\quad r\in[0,1],\ \theta\in[0,2\pi]$$

$$\iint_{u^2+v^2\le1}\sqrt{4u^2+4v^2+1}\,dA_{(u,v)}
=\int_0^{2\pi}\int_0^1\sqrt{4r^2+1}\,r\,dr\,d\theta$$

Seja $w=4r^2+1,\ \frac{dw}{dr}=8r\implies r\,dr=\frac{1}{8}\,dw$

$$\int_0^{2\pi}\int_0^1\sqrt{4r^2+1}\,r\,dr\,d\theta
=\int_0^{2\pi}d\theta\int_{1}^{5}\sqrt{w}\,\frac{1}{8}\,dw$$

$$
=2\pi\cdot\frac{1}{8}\Bigl[\frac{w^{3/2}}{3/2}\Bigr]_1^5
=\frac{1}{6}\pi\bigl[5^{3/2}-1\bigr]
$$', answer = '$$\frac{\pi}{6}(5^{3/2}-1)$$', tags = 'ps29' WHERE question_number = 109;
UPDATE questions SET proposition = 'Em um ponto na superfície de um sólido, os extensômetros da roseta retangular indicada na figura registraram
$$
\varepsilon_A = 2\times10^{-6},\quad \varepsilon_B = 6\times10^{-6},\quad \varepsilon_C = -9\times10^{-6}.
$$
![[q110.png]]
(Legenda: $\varepsilon_A$ no eixo X, $\varepsilon_C$ no eixo Y e $\varepsilon_B$ à 45°, entre o eixo X e Y)

Dado
$$E = 2\times10^5\,\mathrm{MPa} \quad\;\nu = 0,3$$
Determine: 

- a) Tensor deformação considerando $\varepsilon_{zz} = \varepsilon_{xz} = \varepsilon_{yz} = 0$
- b) Tensor tensão para o caso acima (obs: $\varepsilon_{zz} \neq 0$)
- c) Tensor deformação considerando $\sigma_{zz} = 0,\; \sigma_{xz} = \sigma_{yz} = 0$
- d) Tensor tensão para o caso da letra (c)', step_by_step = '- This can also be achieved using the logic of [[q122]]


### Letra a
[[ps34]]
![[ps34#^formulaMestraRotacao]]

$$\varepsilon_A = \varepsilon_{0^\circ} = \varepsilon_{xx} = 2 \times 10^{-6}$$
$$\varepsilon_B = \varepsilon_{45^\circ} = 6 \times 10^{-6}$$
$$\varepsilon_C = \varepsilon_{90^\circ} = \varepsilon_{yy}= -9 \times 10^{-6}$$

$$\theta = 45° \implies \cos (2\theta) = 0; \quad \sin(2\theta) = 1$$
$$\varepsilon_{45^\circ} = \frac{\varepsilon_{xx} + \varepsilon_{yy}}{2} + \frac{\varepsilon_{xx} - \varepsilon_{yy}}{2}\cos(2\theta) + \left(\frac{\gamma_{xy}}{2}\right)\sin(2\theta)$$
$$6 \times 10^{-6} = \frac{2 \times 10^{-6} + (-9 \times 10^{-6})}{2} + \frac{2 \times 10^{-6} - (-9 \times 10^{-6})}{2}(0) + \left(\frac{\gamma_{xy}}{2}\right) (1)$$
$$\left(\frac{\gamma_{xy}}{2}\right) = -\frac{2 \times 10^{-6} + (-9 \times 10^{-6})}{2} - \frac{2 \times 10^{-6} - (-9 \times 10^{-6})}{2}(0) + 6 \times 10^{-6}$$
$$\left(\frac{\gamma_{xy}}{2}\right) = 9.5 \times 10^{-6}$$
$$[\varepsilon] = \begin{pmatrix} \varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\ \varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz} \\ \varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz} \end{pmatrix} = \begin{pmatrix} 2 & 9,5 & 0 \\ 9,5 & -9 & 0 \\ 0 & 0 & 0 \end{pmatrix} \times 10^{-6}$$



### Letra b
[[ps7]]
![[ps7#^equacoesDaTensao]]

$$E = 2\times10^5\,\mathrm{MPa} \quad\;\nu = 0,3$$
$$\sigma_{ij} = 2\mu \,\varepsilon_{ij} + \lambda \,(\varepsilon_{kk})\delta_{ij} $$
$$2 \mu = \frac{E}{1 + \nu} = \frac{2 \times 10^5\,\mathrm{MPa}}{1 + 0,3} \approx 1,538 \times 10^5\,\mathrm{MPa}$$
$$\lambda = \frac{\nu E}{(1 + \nu)(1 - 2\nu)} = \frac{0,3 \times (2 \times 10^5\,\mathrm{MPa})}{(1 + 0,3)(1 - 2 \times 0,3)} \approx 1,154 \times 10^5\,\mathrm{MPa}$$
$$\varepsilon_{kk} = \varepsilon_{xx} + \varepsilon_{yy} + \varepsilon_{zz} = (2 - 9 + 0)\times 10^{-6} = -7\times 10^{-6}$$


Dica: Salvar na calculadora científica $A = 2 \mu; B=\lambda \,(\varepsilon_{kk})$

$$\sigma_{xx} = 2\mu\varepsilon_{xx} + \lambda\varepsilon_{kk} = (1, 5385\times 10^{5})(2\times 10^{-6}) + (1, 1538\times 10^{5})(-7\times 10^{-6})$$
$$\sigma_{xx} = 0, 3077 - 0, 8077 = -0, 5 \text{ MPa}$$
$$\sigma_{yy} = 2\mu\varepsilon_{yy} + \lambda\varepsilon_{kk} = (1, 5385\times 10^{5})(-9\times 10^{-6}) + (1, 1538\times 10^{5})(-7\times 10^{-6})$$
$$\sigma_{yy} = -1, 3847 - 0, 8077 = -2, 192 \text{ MPa}$$
$$\sigma_{xy} = 2\mu\varepsilon_{xy} = (1, 5385\times 10^{5})(9, 5\times 10^{-6}) = 1, 462 \text{ MPa}$$
$$\sigma_{zz} = 2\mu\varepsilon_{zz} + \lambda\varepsilon_{kk} = 0 + (1, 1538\times 10^{5})(-7\times 10^{-6}) = -0, 808 \text{ MPa}$$
$$[\sigma] = \begin{pmatrix} -0, 500 & 1, 462 & 0 \\ 1, 462 & -2, 192 & 0 \\ 0 & 0 & -0, 808 \end{pmatrix} \text{ MPa}$$


### Letra c
[[ps7]]
![[ps7#^equacoesTensaoPlana]]

$$\varepsilon_{zz} = - \frac{0,3}{1-0,3}(2 \times 10^{-6} - 9 \times 10^{-6}) = - \frac{0,3}{0,7}(-7 \times 10^{-6}) = 3 \times 10^{-6}$$
$$[\varepsilon] = \begin{pmatrix} 2 & 9,5 & 0 \\ 9,5 & -9 & 0 \\ 0 & 0 & 3 \end{pmatrix} \times 10^{-6}$$



### Letra d
#### Método 1 - Sem usar o resultado da letra c
[[ps7]]
![[ps7#^equacoesTensaoPlana]]

$$\sigma_{xx} = \frac{2 \times 10^{5}}{1-0,3^{2}}[2 \times 10^{-6} + 0,3(-9 \times 10^{-6})] = -0,15 \text{ MPa}$$
$$\sigma_{yy} = \frac{2 \times 10^{5}}{1-0,09}[-9 \times 10^{-6} + 0,3(2 \times 10^{-6})] = -1,85 \text{ MPa}$$
$$\tau_{xy} = \frac{2 \times 10^{5}}{2(1+0,3)}(19 \times 10^{-6}) = 1,46 \text{ MPa}$$
$$[\sigma] = \begin{pmatrix} -0,15 & 1,46 & 0 \\ 1,46 & -1,85 & 0 \\ 0 & 0 & 0 \end{pmatrix} \text{ MPa}$$

#### Método 2 - Usando o resultado da letra c
$$\varepsilon_{kk} = \varepsilon_{xx} + \varepsilon_{yy} + \varepsilon_{zz} = (2 - 9 + 3)\times 10^{-6} = -4\times 10^{-6}$$
$$\sigma_{xx} = 2\mu\varepsilon_{xx} + \lambda\varepsilon_{kk} = (1,5385\times 10^{5})(2\times 10^{-6}) + (1,1538\times 10^{5})(-4\times 10^{-6})$$
$$\sigma_{xx} = 0,3077 - 0,4615 = -0,1538 \approx -0,15 \text{ MPa}$$
$$\sigma_{yy} = 2\mu\varepsilon_{yy} + \lambda\varepsilon_{kk} = (1,5385 \times 10^5)(-9 \times 10^{-6}) + (1,1538 \times 10^5)(-4 \times 10^{-6})$$
$$\sigma_{yy} = -1,3847 - 0,4615 = -1,8462 \approx -1,85 \text{ MPa}$$
$$\sigma_{xy} = 2\mu\varepsilon_{xy} = (1,5385 \times 10^5)(9,5 \times 10^{-6}) = 1,4616 \approx 1,46 \text{ MPa}$$
$$\sigma_{zz} = 2\mu\varepsilon_{zz} + \lambda\varepsilon_{kk} = (1,5385 \times 10^5)(3 \times 10^{-6}) + (1,1538 \times 10^5)(-4 \times 10^{-6})$$
$$\sigma_{zz} = 0,4615 - 0,4615 = 0 \text{ MPa}$$', answer = 'a)
$$[\varepsilon] = \begin{pmatrix} \varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\ \varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz} \\ \varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz} \end{pmatrix} = \begin{pmatrix} 2 & 9,5 & 0 \\ 9,5 & -9 & 0 \\ 0 & 0 & 0 \end{pmatrix} \times 10^{-6}$$
b)
$$[\sigma] = \begin{pmatrix} -0, 500 & 1, 462 & 0 \\ 1, 462 & -2, 192 & 0 \\ 0 & 0 & -0, 808 \end{pmatrix} \text{ MPa}$$

c)
$$[\varepsilon] = \begin{pmatrix} 2 & 9,5 & 0 \\ 9,5 & -9 & 0 \\ 0 & 0 & 3 \end{pmatrix} \times 10^{-6}$$

d)
$$[\sigma] = \begin{pmatrix} -0,15 & 1,46 & 0 \\ 1,46 & -1,85 & 0 \\ 0 & 0 & 0 \end{pmatrix} \text{ MPa}$$', tags = 'ps34,ps7' WHERE question_number = 110;
UPDATE questions SET proposition = 'Para o tensor deformação $[\varepsilon]$ ao lado, determine:
$$
[\varepsilon] = \begin{bmatrix}
2 & 7 & 0\\
7 & -9 & 0\\
0 & 0 & 3
\end{bmatrix}\times10^{-6}.
$$

a) componentes principais
b) cossenos diretores das direções principais  
c) maior distorção de cisalhamento em 3D', step_by_step = '![[ps11#^autovaloreAutovetores]]


### Letra a
$$\det \begin{pmatrix} 2-\lambda & 7 & 0 \\ 7 & -9-\lambda & 0 \\ 0 & 0 & 3-\lambda \end{pmatrix}=0$$
$$(3-\lambda)[(2-\lambda)(-9-\lambda)-(7)(7)]=0$$
$$3-\lambda=0 \implies \lambda=3$$
$$(2-\lambda)(-9-\lambda)-49=0$$
$$\lambda^2+7\lambda-18-49=0$$
$$\lambda^2+7\lambda-67=0$$
$$\lambda=\frac{-b \pm \sqrt{b^2-4ac}}{2a}=\frac{-7 \pm \sqrt{7^2-4(1)(-67)}}{2(1)}=\frac{-7 \pm \sqrt{49+268}}{2}=\frac{-7 \pm \sqrt{317}}{2}$$
$$\lambda''=\frac{-7+\sqrt{317}}{2}\approx \frac{-7+17,804}{2}\approx 5,402$$
$$\lambda''''=\frac{-7-\sqrt{317}}{2}\approx \frac{-7-17,804}{2}\approx -12,402$$
$$\varepsilon_1 \approx 5,40 \times 10^{-6} \quad\varepsilon_2 = 3 \times 10^{-6} \quad \varepsilon_3 \approx -12,40 \times 10^{-6}$$



### Letra b

$$([\varepsilon]-\lambda_2[I])\vec{v_2}=\vec{0}$$
$$\begin{bmatrix} 2-3 & 7 & 0 \\ 7 & -9-3 & 0 \\ 0 & 0 & 3-3 \end{bmatrix}\begin{bmatrix} v_{2x} \\ v_{2y} \\ v_{2z} \end{bmatrix}=\begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \rightarrow \hat{n_2}=[0,0,1]$$
---
Como a deformação principal $\varepsilon_2$ está exclusivamente na direção $z$, as outras duas deformações principais ($\varepsilon_1$ e $\varepsilon_3$) estão no plano $XY$, ou seja, $n_{1z}=n_{3z}=0$
$$
([\varepsilon]-\lambda_1[I])\vec{v_1}=0
$$
$$
\begin{bmatrix}
2-5,402 & 7 \\
7 & -9-5,402
\end{bmatrix}
\begin{bmatrix}
v_{1X} \\
v_{1Y}
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0
\end{bmatrix}
$$
$$-3,402 v_{1X} + 7 v_{1Y}=0$$
$$
v_{1x}=2,058 v_{1y} \rightarrow v_{1y}=1 \rightarrow v_{1x}=2,058
$$
$$\theta_{p1}=\tan^{-1}\left(\frac{v_{1y}}{v_{1x}}\right)=25,916^\circ$$
$$\theta_{p_{3}}=\theta_{p1}+90^\circ=115,916^\circ$$
---
$$\hat{n}_k=(\cos\theta_k,\sin\theta_k,0)$$
$$\hat{n}_1=(0,899,0,437,0) \quad\hat{n}_2=(0,0,1) \quad\hat{n}_3=(-0,437,0,899,0)$$


Pelo círculo de Mohr 2D ([[ps11]])
$$\tan(2\theta_{p1}) = \frac{2\varepsilon_{xy}}{\varepsilon_{xx} - \varepsilon_{yy}} = \frac{2(7)}{2 - (-9)} = \frac{14}{11}$$
$$2\theta_{p1} = \arctan\left(\frac{14}{11}\right) \approx 51,84^\circ$$
$$\theta_{p1} \approx 25,92^\circ$$


### Letra c
$$\frac{\gamma_{max}}{2} = \frac{\varepsilon_{1}-\varepsilon_{3}}{2}=\frac{( 5,40 \times 10^{-6}) -(-12,40 \times 10^{-6})}{2}=8,9\times 10^{-6}$$', answer = '$$\varepsilon_1 \approx 5,40 \times 10^{-6} \quad\varepsilon_2 = 3 \times 10^{-6} \quad \varepsilon_3 \approx -12,40 \times 10^{-6}$$
$$\hat{n}_1=(0,899,0,437,0) \quad\hat{n}_2=(0,0,1) \quad\hat{n}_3=(-0,437,0,899,0)$$$$\frac{\gamma_{max}}{2} = 8,9\times 10^{-6}$$', tags = 'ps11' WHERE question_number = 111;
UPDATE questions SET proposition = 'Para o tensor tensões no ponto de um corpo, determine:
$$
[\sigma] = \begin{bmatrix}
50 & 25 & 0\\
25 & 100 & 0\\
0 & 0 & -200
\end{bmatrix}\,\mathrm{MPa}
$$
$$\alpha = 10^{-6}\,\!^\circ\mathrm{C}^{-1} \quad E = 2\times10^5\,\mathrm{MPa} \quad\nu = 0,3$$

a) Tensor deformação no ponto  
b) Tensor deformação para a situação em que houve uma variação de temperatura $\Delta T = 30^\circ\mathrm{C}$
c) Tensor tensão para a situação (b). Considere que o corpo todo foi submetido a $\Delta T$ e que não existe restrição para expansão do corpo.  ', step_by_step = '![[ps7#2 fórmulas principais]]


### Letra a
$$\varepsilon_{ij} = \frac{1}{2\mu} \, \sigma_{ij} \;-\; \frac{\nu}{E} \, (\sigma_{kk}) \, \delta_{ij} +(\alpha \Delta T)\delta_{ij}$$
 [[ps7]]

$$\mu = \frac{E}{2(1+\nu)} = \frac{2 \times 10^{5}}{2(1+0,3)} = 7,692\cdot 10^4\text{ MPa}$$
$$\sigma_{kk} = (\sigma_{11} + \sigma_{22} + \sigma_{33}) = (50+100+(-200)) = -50\text{ MPa}$$
$$(\alpha \Delta T) =0$$
$$\text{Calculadora} \quad A = \frac{1}{2\mu} \quad B = \frac{\nu}{E} \sigma_{kk}$$
$$\varepsilon_{11} = \frac{1+0,3}{2 \cdot 10^5}(50) - \frac{0,3}{2 \cdot 10^5}(-50) = \frac{1,3 \cdot 50+0,3 \cdot 50}{2 \cdot 10^5} = \frac{80}{2 \cdot 10^5} = 4,0 \times 10^{-4}$$
$$\varepsilon_{22} = \frac{1+0,3}{2 \cdot 10^5}(100) - \frac{0,3}{2 \cdot 10^5}(-50) = \frac{1,3 \cdot 100+15}{2 \cdot 10^5} = \frac{145}{2 \cdot 10^5} = 7,25 \times 10^{-4}$$
$$\varepsilon_{33} = \frac{1+0,3}{2 \cdot 10^5}(-200) - \frac{0,3}{2 \cdot 10^5}(-50) = \frac{1,3 \cdot (-200)+15}{2 \cdot 10^5} = \frac{-245}{2 \cdot 10^5} = -12,25 \times 10^{-4}$$
$$\varepsilon_{12} = \frac{1+0,3}{2 \cdot 10^5}(25) = \frac{1,3 \cdot 25}{2 \cdot 10^5} = \frac{32,5}{2 \cdot 10^5} = 1,625 \times 10^{-4}$$

$$[\varepsilon] = \begin{bmatrix} 4,0 & 1,625 & 0 \\ 1,625 & 7,25 & 0 \\ 0 & 0 & -12,25 \end{bmatrix} \cdot 10^{-4}$$
### Letra b
$$\varepsilon_{\text{térmica}} = \alpha \Delta T = (10^{-6})(30) = 3 \times 10^{-5} = 0,3 \times 10^{-4}$$
$$[\varepsilon''] = [\varepsilon]_{\text{mecânica}} + [\varepsilon]_{\text{térmica}}$$
$$[\varepsilon''] = \left( \begin{bmatrix} 4,0 & 1,625 & 0 \\ 1,625 & 7,25 & 0 \\ 0 & 0 & -12,25 \end{bmatrix} + \begin{bmatrix} 0,3 & 0 & 0 \\ 0 & 0,3 & 0 \\ 0 & 0 & 0,3 \end{bmatrix} \right) \cdot 10^{-4}$$
$$[\varepsilon''] = \begin{bmatrix} 4,3 & 1,625 & 0 \\ 1,625 & 7,55 & 0 \\ 0 & 0 & -11,95 \end{bmatrix} \cdot 10^{-4}$$


### Letra c
Como \"não existe restrição para expansão do corpo\", não há tensões adicionais geradas pela diferença de temperatura, ou seja
$$[\sigma''] = [\sigma]$$
Calculando $\sigma''_{11}$ como exemplo:

$$\lambda = \frac{E\nu}{(1+\nu)(1-2\nu)} = \frac{(2 \cdot 10^5)(0,3)}{(1+0,3)(1-2 \cdot 0,3)} = \frac{60000}{1,3 \cdot 0,4} \approx 115385 \text{ MPa}$$

$$\varepsilon''_{kk} = (4,3 + 7,55 - 11,95) \times 10^{-4} = -0,1 \times 10^{-4}$$

$$(3\lambda + 2\mu)\alpha\Delta T = \frac{E}{1-2\nu}\alpha\Delta T = \frac{2 \cdot 10^5}{0,4}(0,3 \times 10^{-4}) = (5 \cdot 10^5)(0,3 \times 10^{-4}) =15 \text{ MPa}$$
$$\sigma''_{11} = \lambda\varepsilon''_{kk} + 2\mu\varepsilon''_{11} - (3\lambda + 2\mu)\alpha\Delta T$$
$$\sigma''_{11} = (115385)(-0,1 \times 10^{-4}) + 2(76923)(4,3 \times 10^{-4}) - 15$$
$$\sigma''_{11} = -1,15 + 66,15 - 15 = 50 \text{ MPa}$$', answer = 'a)
$$[\varepsilon] = \begin{bmatrix} 4,0 & 1,625 & 0 \\ 1,625 & 7,25 & 0 \\ 0 & 0 & -12,25 \end{bmatrix} \cdot 10^{-4}$$
b)
$$[\varepsilon''] = \begin{bmatrix} 4,3 & 1,625 & 0 \\ 1,625 & 7,55 & 0 \\ 0 & 0 & -11,95 \end{bmatrix} \cdot 10^{-4}$$


c) Como \"não existe restrição para expansão do corpo\", não há tensões adicionais geradas pela diferença de temperatura, ou seja
$$[\sigma''] = [\sigma]$$', tags = 'ps7' WHERE question_number = 112;
UPDATE questions SET proposition = 'Considere um caso unidimensional (ou seja, $\nu=0$) onde uma barra de aço com as seguintes características:
- Comprimento inicial: $L_0 = 1{,}00\,\mathrm{m}$.
- Área da seção transversal: $A = 1{,}0 \times 10^{-4}\,\mathrm{m}^2$.
- Módulo de Young (aço): $E = 210\,\mathrm{GPa}$.

Suponha que aplicamos uma força de $F = 10{,}5\,\mathrm{kN}$ ao longo do eixo da barra, de modo que ela tente esticá-la.
1. Calcular a tensão $\sigma$
2. Calcular a deformação $\varepsilon$
3. Determinar o novo comprimento $L$', step_by_step = '$$\sigma = E \varepsilon = \frac{F}{A} = \frac{10,5 \cdot 10^3}{1 \cdot 10^{-4}} = 1,05 \cdot 10^8\,Pa = 105\,MPa$$

![[ps7#^equacoesDaDeformacao]]
$$\varepsilon = \frac{\sigma}{E} = \frac{1,05 \cdot 10^8}{210 \cdot 10^9} = 5 \cdot 10^{-4}$$
$$\varepsilon = \frac{L - L_0}{L_0} = \frac{\Delta L}{L_0} \;\to\; L = \varepsilon L_0 + L_0 = 5 \cdot 10^{-4} \cdot 1 + 1 = 1,0005\,m$$', answer = '1. $\sigma = 105\,\mathrm{MPa}$
2. $\varepsilon = 5{,}0 \times 10^{-4}$
3. $L = 1{,}0005\,\mathrm{m}$', tags = 'ps5,ps7' WHERE question_number = 115;

UPDATE questions SET proposition = 'Considere um cubo de arestas iniciais $L_0 = 0,5\ \mathrm{m}$ cujo material é definido por
$$E = 200\ \mathrm{GPa} \quad \nu = 0,3$$
Nas faces normais ao eixo $x$ aplica-se o estado uniforme de tensões
$$
\sigma_{xx} = 150\ \mathrm{MPa}, \quad \sigma_{yy} = 0, \quad \sigma_{zz} = 0, \quad \sigma_{xy} = \sigma_{xz} = \sigma_{yz} = 0,
$$
e assume-se que o cubo não sofre torções nem cisalhamentos adicionais.

1. Determine o tensor de tensões
2. Determine o tensor de deformações
3. Determine as novas dimensões do cubo ($L_x, \quad L_y, \quad L_z$)
4. Determine a variação volumétrica relativa
5. Explique, resumidamente, por que na situação tridimensional não é suficiente aplicar a relação uniaxial $\varepsilon = \sigma/E$.




Para pequenas deformações, considere
$$
\frac{\Delta V}{V_0} \approx \varepsilon_{xx} + \varepsilon_{yy} + \varepsilon_{zz}, \quad V_0 = L_0^3.
$$', step_by_step = '- E = 200 GPa, ν = 0,3

$$
\text{Tensor de tensões } (\sigma)  =
\begin{bmatrix}
150 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\;[\mathrm{MPa}]
$$

$$
\text{Tensor de deformações } (\varepsilon) =
\begin{bmatrix}
ε_{xx} & ε_{xy} & ε_{xz} \\
ε_{yx} & ε_{yy} & ε_{yz} \\
ε_{zx} & ε_{zy} & ε_{zz}
\end{bmatrix}
$$
- Fórmula da relação constitutiva da lei de Hooke em elasticidade linear isotrópica:
$$
ε_{ij} \;=\; \frac{1+ν}{E} \, σ_{ij} \;-\; \frac{ν}{E} \, σ_{kk} \, δ_{ij}
$$
- da qual se obtém:
$$
ε_{ii} \;=\; \frac{1}{E} \Bigl(σ_{ii} \;-\; ν \sum_{j \neq i} σ_{jj}\Bigr)
\quad (\text{componentes normais})
$$
$$
ε_{ij} \;=\; \frac{1+ν}{E} \, \tau_{ij}
\quad (\text{componentes de cisalhamento})
$$
- Como $\tau_{ij} = 0$ para todo $i \neq j$, então $\varepsilon_{ij} = 0$ para todo $i \neq j$ (Ou seja, como$T_{xy} = T_{yx} = T_{xz} = T_{zx} = T_{yz} = T_{zy} = 0$, então  $ε_{xy} = ε_{yx} = ε_{xz} = ε_{zx} = ε_{yz} = ε_{zy} = 0$)
  



$$
ε_{xx} = \frac{1}{E}\bigl(σ_{xx} - ν\,(σ_{yy} + σ_{zz})\bigr)
= \frac{1}{200\cdot10^{9}}\bigl(150\cdot10^{6} - 0,3\,(0 + 0)\bigr)
= 7,5\cdot10^{-4}
$$
$$
ε_{yy} = ε_{zz} 
= \frac{1}{E}\bigl(σ_{yy} - ν\,(σ_{xx} + σ_{zz})\bigr)
= \frac{1}{200\cdot10^{9}}\bigl(0 - 0,3\,(150\cdot10^{6})\bigr)
= -2,25\cdot10^{-4}
$$
$$
\text{Tensor de deformações } (\varepsilon) =
\begin{bmatrix}
7,5\cdot10^{-4} & 0 & 0 \\
0 & -2,25\cdot10^{-4} & 0 \\
0 & 0 & -2,25\cdot10^{-4}
\end{bmatrix}
$$$$
L_{x} = L_{0}\,(1 + ε_{xx}) = 0,5 \cdot \bigl(1 + 7,5\cdot10^{-4}\bigr) = 0,500375 \,\mathrm{m}
$$$$
L_{y} = L_{z} = L_{0}\,(1 + ε_{yy}) = 0,5 \cdot \bigl(1 + (-2,25\cdot10^{-4})\bigr) = 0,4998875 \,\mathrm{m}
$$

$$
\frac{ΔV}{V_{0}} = \frac{V - V_{0}}{V_{0}} = 2,997\cdot10^{-4} \approx ε_{xx} + ε_{yy} + ε_{zz} \quad (\text{ou }0,03\%)
$$
$$
V_{0} = 0,5^{3} \quad \quad \quad V = 0,500375 \cdot (0,4998875)^{2}
$$

A relação ε=σ/E\varepsilon=\sigma/Eε=σ/E é **uniaxial**: admite deformação numa só direção, supondo que as demais direções estejam livres de tensão e, portanto, livres para se contrair ou expandir sem resistência.

Em um estado tridimensional o material **acopla** as direções: aplicar $\sigma_{xx}$​ provoca não só $\varepsilon_{xx}$​ mas também deformações laterais $\varepsilon_{yy}$ $\varepsilon_{zz}$​ pela razão de Poisson $\nu$. A constitutiva correta é o **tensor elástico de 4ª ordem**, que liga cada componente de tensão a todas as componentes de deformação. Ignorar esse acoplamento leva a erros de volume, de deslocamentos e de energia armazenada no material.

Pois em um estado tridimensional as deformações são acopladas em todas as direções pela razão de Poisson.', answer = '$$
\text{Tensor de tensões } (\sigma)  =
\begin{bmatrix}
150 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\;[\mathrm{MPa}]
$$

$$
\text{Tensor de deformações } (\varepsilon) =
\begin{bmatrix}
7,5\cdot10^{-4} & 0 & 0 \\
0 & -2,25\cdot10^{-4} & 0 \\
0 & 0 & -2,25\cdot10^{-4}
\end{bmatrix}
$$$$
L_{x} = 0,500375 \,\mathrm{m}
$$$$
L_{y} = L_{z}  = 0,4998875 \,\mathrm{m}
$$
$$
\frac{ΔV}{V_{0}} = 2,997\cdot10^{-4} \approx 0,03\%
$$

Pois em um estado tridimensional as deformações são acopladas em todas as direções pela razão de Poisson.', tags = 'ps5, ps7, ps8' WHERE question_number = 116;
UPDATE questions SET proposition = '$$\iint_{S} x\,y\,z\,dS$$
onde $S:\{z=\sqrt{x^2+y^2},\ 0\le z\le1\}$', step_by_step = '$$\vec r(r,\theta)=\begin{cases}
x = r\cos\theta\\
y = r\sin\theta\\
z = r
\end{cases}$$
$$\vec r_r = (\cos\theta,\ \sin\theta,\ 1),\quad \vec r_\theta = (-r\sin\theta,\ r\cos\theta,\ 0)$$
$$\vec r_r\times \vec r_\theta = (-r\cos\theta,\,-r\sin\theta,\,r)$$
$$|| \vec r_r\times \vec r_\theta || = \sqrt{2}\,r$$
$$\iint_{S} x\,y\,z\,dS = \iint_{[0,1]\times[0,2\pi]} (r\cos\theta)(r\sin\theta)(r)(\sqrt2\,r)\,dr\,d\theta$$
$$= \sqrt2\int_{0}^{2\pi}\int_{0}^{1} r^4\cos\theta\sin\theta\,dr\,d\theta$$
$$= \sqrt2\biggl(\int_{0}^{1}r^4\,dr\biggr)\biggl(\int_{0}^{2\pi}\cos\theta\sin\theta\,d\theta\biggr)$$
$$= \frac{\sqrt2}{5}\int_{0}^{2\pi}\cos\theta\sin\theta\,d\theta = 0$$', answer = '$$0$$' WHERE question_number = 117;
UPDATE questions SET proposition = 'Para a orientação para fora (positiva), calcule
$$
\iint_S \mathbf F \cdot d\mathbf S.
$$
$$F(x,y,z) = (0,0,z) \quad S: x^2 + y^2 + z^2 = 1$$', step_by_step = '$$\vec r(\theta,\phi): x = \sin\phi\cos\theta \quad y = \sin\phi\sin\theta \quad z = \cos\phi $$
$$\theta\in[0,2\pi] \quad \phi\in[0,\pi]$$
$$\vec r_\theta = \frac{\partial\vec r}{\partial\theta} = (-\sin\phi\sin\theta,\; \sin\phi\cos\theta,\;0)$$
$$\vec r_\phi = \frac{\partial\vec r}{\partial\phi} = (\cos\phi\cos\theta,\;\cos\phi\sin\theta,\;-\sin\phi)$$
$$
\vec r_\theta \times \vec r_\phi
= (\sin^2\phi\cos\theta,\;\sin^2\phi\sin\theta,\;\sin\phi\cos\phi).
$$
$$F(\vec r(\theta,\phi)) = (0,0,\cos\phi)$$
$$
F(\vec r(\theta,\phi)) \cdot \bigl(\vec r_\theta\times\vec r_\phi\bigr)
= \cos^2\phi\,\sin\phi.
$$
$$
\iint_S \mathbf F \cdot d\mathbf S
= \int_0^{2\pi}\!\!\int_0^\pi \cos^2\phi\,\sin\phi\,d\phi\,d\theta
= 2\pi \int_0^\pi \cos^2\phi\,\sin\phi\,d\phi
= \frac{4\pi}{3}
$$', answer = '$$\frac{4\pi}{3}$$', tags = '' WHERE question_number = 118;
UPDATE questions SET proposition = 'Determine $\iint_S \vec{F}\,d\vec{s}$ sabendo que $\vec{F}(x,y,z) = (e^{y^2},\,x\sin^3(z),\,z)$ e $S$ é o gráfico de $z = x^2 + y^2$ com $(x,y)\in D=\{x^2+y^2\le1\}$ orientado no horário quando visto de cima (ou seja, com a normal apontando para baixo)', step_by_step = '## Método 1
![[ps19#^divergenceTheorem]]

Vamos chamar $\tilde{S} = S \cup T$, a superfície definida pela união das superfícies $S$ e $T$, sendo $T$ uma superfície que vamos criar para "fechar" $S$, dessa forma, definindo um sólido $V$ tal que $\partial V = \tilde{S}$. Isso para que possamos utilizar o Teorema da divergência.
$$S = \{(x,y,z)\in \mathbb{R}^3 : z = x^2 + y^2,\; x^2 + y^2 \le 1\}$$
$$T = \{(x,y,z)\in \mathbb{R}^3 : z = 1,\; x^2 + y^2 \le 1\}$$
$$D = \{(r,\theta)\in \mathbb{R}^2 : 0 \le r \le 1,\; 0 \le \theta < 2\pi\}$$
---
$$\Phi_S: D \to S,\quad \Phi_S(r,\theta) = (r\cos\theta,\; r\sin\theta,\; r^2)$$
$$\Phi_T: D \to T,\quad \Phi_T(r,\theta) = (r\cos\theta,\; r\sin\theta,\; 1)$$
---
$$\partial V = S \cup T \Longleftrightarrow \partial V = \Phi_S(D)\cup \Phi_T(D)$$

$$V = \{(x,y,z)\in \mathbb{R}^3: x^2 + y^2 \le z \le 1\}$$
$$V = \{(r,\theta,z): 0 \le r \le 1,\;0 \le \theta < 2\pi,\;r^2 \le z \le 1\}$$
$$V = \{(r,\theta,z) : (r,\theta)\in D,\; r^2 \le z \le 1\}$$
---
$$(\nabla \cdot \vec{F})(x,y,z) =\operatorname{div} \vec{F} = \frac{\partial}{\partial x} e^{y^2} + \frac{\partial}{\partial y} \left( x \sin^3 z \right) + \frac{\partial}{\partial z} (z) = 0 + 0 + 1 = 1
$$
$$(\nabla \cdot \vec{F})(x(t),y(t),z(t)) = 1$$
---
$$ \\{{\rlap{\mspace{1mu}\boldsymbol{\bigcirc}}}{\rlap{\int}{\;\int}}}}_{\tilde{S}=\partial V} \vec{F} \, d\vec{S} 
\;=\;
\iiint_{V} (\nabla \cdot \vec{F})\, dV$$
$$=\int_{0}^{2\pi}\int_{0}^{1}\int_{r^2}^{1} 1 \, r \,  dz \,dr \, d\theta =\frac{\pi}{2}$$
---
$$\int_0^{2\pi}\int_0^1\int_{r^2}^1 1\,r\,dz\,dr\,d\theta$$
$$\int_{z=r^2}^1 1\,dz = [z]_{z=r^2}^1 = 1 - r^2$$
$$\int_{r=0}^1 (1 - r^2)\,r\,dr = \int_0^1 (r - r^3)\,dr = \left[\frac{r^2}{2} - \frac{r^4}{4}\right]_0^1 = \frac{1}{2} - \frac{1}{4} = \frac{1}{4}$$
$$\int_0^{2\pi} \frac{1}{4}\,d\theta = \frac{1}{4} \times 2\pi = \frac{\pi}{2}$$
---
$$\\{{\rlap{\mspace{1mu}\boldsymbol{\bigcirc}}}{\rlap{\int}{\;\int}}}}_{\tilde{S}=\partial V} \vec{F} \, d\vec{S} = \iint_{S}{\vec{F} \, d\vec{S}} + \iint_{T}{\vec{F} \, d\vec{S}}$$
$$\iint_{S}{\vec{F} \, d\vec{S}} = 
{{\rlap{\mspace{1mu}\boldsymbol{\bigcirc}}}{\rlap{\int}{\;\int}}}}_{\tilde{S}=\partial V} \vec{F} \, d\vec{S} -
\iint_{T}{\vec{F} \, d\vec{S}}
$$
---
$$\iint_{T}{\vec{F} \, d\vec{S}} = \iint_{D}{\vec{F} \cdot \vec{n}\, dA}$$
Como $D \in \mathbb R^{2}$, sendo um círculo de raio $1$
$$\vec{n}=(0,0,1) \implies \vec{F} \cdot \vec{n} = \vec{F}_{z} = z=1$$
$$\iint_{D}{\vec{F} \cdot \vec{n}\, dA} = \iint_{D}{1\, dA} = \pi$$
---
$$\iint_{S}{\vec{F} \, d\vec{S}} = \frac{\pi}{2} -\pi = \boxed{-\frac{\pi}{2}}$$
---


## Método 2
![[ps30#^flux]]

Para parametrizar a superfície S (gráfico de $z = x^2 + y^2$ sobre D: $x^2 + y^2 \le 1$), tomamos

$$\vec{r}(x,y) = (x,\, y,\, x^2 + y^2), \quad (x,y) \in D$$
$$\frac{\partial r}{\partial x} = (1, 0, 2x), \quad \frac{\partial r}{\partial y} = (0, 1, 2y)$$
e o elemento de área orientado para cima é
$$
dS = \Bigl(\frac{\partial r}{\partial x} \times \frac{\partial r}{\partial y}\Bigr)\,dx\,dy = (-2x, -2y, 1)\,dx\,dy.
$$

No ponto $(x,y,z)$ com $z = x^2 + y^2$,

$$
\mathbf F = (e^z,\,x\sin^3(z),\,z)
\;\Longrightarrow\;
\mathbf F(x,y,x^2+y^2) = (e^{x^2+y^2},\,x\sin^3(x^2+y^2),\,x^2+y^2).
$$

O produto escalar é

$$
\mathbf F\cdot dS = (e^z,\,x\sin^3(z),\,z)\cdot(-2x, -2y, 1)\,dx\,dy
= -2x\,e^z - 2xy\sin^3(x^2+y^2) + (x^2+y^2)\,dx\,dy,
$$

onde $\rho^2 = x^2 + y^2$. Assim

$$
\iint_S \mathbf F\cdot dS = \iint_D \bigl[-2x\,e^z - 2xy\sin^3(x^2+y^2) + (x^2+y^2)\bigr]\,dx\,dy.
$$

Agora separam-se os termos:

1. $\iint_D -2x\,e^z\,dx\,dy = 0$ por ser função ímpar em $x$ num disco simétrico.
2. $\iint_D -2xy\sin^3(x^2+y^2)\,dx\,dy = 0$ também por simetria (ímpar em $x$ ou em $y$).
3. $\iint_D (x^2+y^2)\,dx\,dy = \int_0^{2\pi}\int_0^1 r^2\, (r\,dr\,d\theta) = 2\pi\int_0^1 r^3\,dr = 2\pi\cdot\tfrac{1}{4} = \tfrac{\pi}{2}.$

Somando, vem
$$
\iint_S \mathbf F\cdot dS = \frac{\pi}{2}
$$
como o elemento de área está orientado para baixo, basta inverter o sinal, resultando em
$$\boxed{-\frac{\pi}{2}}$$
', answer = '$$\boxed{\iint_{S}{\vec{F} \, d\vec{S}}  = -\frac{\pi}{2}}$$', tags = 'ps19, ps30' WHERE question_number = 119;
UPDATE questions SET proposition = 'Calcule $\oint_{C}\vec F\cdot d\vec r$ onde $\vec F=(y^2,x,z^2)$ e $C=\{\,y+z=2\}\cap\{\,x^2+y^2=1\}$ orientada no sentido anti-horário quando observada de cima.', step_by_step = '### Método 1 - Pelo teorema de Stokes
![[ps19#^stokesTheorem]]

![[ps28#^rot]]


Para usarmos Stokes, precisamos de uma superfície aberta cujas fronteiras sejam o caminho C
$$S\equiv\{\,y+z=2\},\quad x^2+y^2\le1$$

---
$$\vec{r}:\;x=x,\;y=y,\;z=2-y;$$
$$(x,y)\in D=\{x^2+y^2\le1\}$$
$$\vec r_{x}=(1,0,0),\quad \vec r_{y}=(0,1,-1)$$
$$\vec r_{x}\times\vec r_{y}=(0,1,1)$$
---
$$\vec F(x,y,z)=(y^2,x,z^2)$$
$$
\nabla \times \vec{F} = \begin{pmatrix}
\frac{\partial}{\partial y}(z^2) - \frac{\partial}{\partial z}(x) \\
\frac{\partial}{\partial z}(y^2) - \frac{\partial}{\partial x}(z^2) \\
\frac{\partial}{\partial x}(x) - \frac{\partial}{\partial y}(y^2)
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0 \\
1 - 2y
\end{pmatrix}
= (0,\,0,\,1 - 2y)
$$
---
$$\oint_{C}\vec F\cdot d\vec r 
=\iint_{D}(0,0,1-2y)\cdot(0,1,1)\,dA 
=\iint_{D}(1-2y)\,dA$$
---
#### Método 1.1 Coordenadas polares
$$x=r \cos \theta, \;y=r\sin\theta,\;D:\;0\le r\le1,\;0\le\theta\le2\pi$$
$$\iint_{D}(1-2y)\,dA
=\int_{0}^{2\pi}\int_{0}^{1}(1-2r\sin\theta)\,r\,dr\,d\theta$$
$$\int_{0}^{2\pi}\int_{0}^{1}(1-2r\sin\theta)\,r\,dr\,d\theta
=\int_{0}^{2\pi}\Bigl(\tfrac12-\tfrac23\sin\theta\Bigr)d\theta
=\pi$$
---
#### Método 1.2 Coordenadas cartesianas
$$\iint_D 1\,dA = \pi$$$$\iint_D y\,dA = 0 \quad \text{by symmetry}$$
$$\oint_C \vec F \cdot d\vec r = \pi - 2\cdot 0 = \pi$$
---', answer = '$$\oint_{C}\vec F\cdot d\vec r =\boxed{\pi}$$', tags = 'ps19, ps28' WHERE question_number = 120;
UPDATE questions SET proposition = '>[!attention] A versão 2,5D dessa questão é [[q96]]

Para o tensor de tensões a seguir, determine:
a) Tensões principais
b) Tensão de cisalhamento máxima
b) Cossenos diretores dos planos principais e do plano de cisalhamento máximo
$$
[\sigma] = \begin{bmatrix}
200 & 50\\
50 & -70
\end{bmatrix} MPa
$$
Faça o desenvolvimento da questão de duas formas:
- graficamente com o Círculo de Mohr
- algebricamente com as relações entre autovalores e autovetores.', step_by_step = '### Círculo de Mohr
![[q96.png]]

>[!info] ![[ps11#^tensaoMedia]]

$$\sigma_{\text{med}}^{(2D)} = \frac{\sigma_{xx} + \sigma_{yy}}{2} = \frac{200 + (-70)}{2} = 65$$
>[!info] ![[ps11#^tensaoMaximaCisalhamento]]

$$\tau_{\max}^{(2D)} =\sqrt{ (\sigma_{xx} - \sigma_{medio})^2 + \tau_{xy}^2 } \,=\, \sqrt{(200 - 65)^2 + 50^2} = 143.962$$

>[!info] ![[ps11#^tensoesPrincipais]]

$$\sigma_{\text{1}}^{(2D)} = \sigma_{\mathrm{med}} + \tau_{max} = 65 + 143.962 = 208.962$$
$$\sigma_{\text{2}}^{(2D)} = \sigma_{\mathrm{med}} - \tau_{max} = 65 - 143.962 = -78.962$$



$$\tan(2\theta_1) = \frac{\tau_{xy}}{\sigma_{xx} - \sigma_{\mathrm{med}}}$$
$$\theta_{p1} = \arctan\!\bigl(\frac{\tau_{xy}}{\sigma_{xx} - \sigma_{\mathrm{med}}}\bigr) \frac{1}{2} =\arctan\!\bigl(\tfrac{50}{200 - 65}\bigr) \frac{1}{2}= 10.161^\circ \quad \circlearrowleft$$
$$\theta_{p2} = \theta_{p1}+90° = 10.161° + 90° = 100.161°$$
$$\theta_{s1}, \theta_{s_{2}} = \theta_{p1} \mp 45° = 10.161° \mp 45° = -34.839°,55.161°$$

---
Como escrito na [[ps4]]:
$$\hat{n}_{k} = (\cos\theta_{xx''}, \cos \theta_{xy''}) = (\cos\theta_{xx''}, \cos (\theta_{xx''}-90°))= (\cos(\theta_{k}), \sin(\theta_{k}))$$
$$\hat{n}_{p1} = (\cos\theta_{p1}, \sin\theta_{p1}) = (\cos(10.161^\circ), \sin(10.161^\circ)) = (0.984, 0.176)$$
$$\hat{n}_{p_{2}} = (\cos\theta_{p2}, \sin\theta_{p2}) = (\cos(100.161^\circ), \sin(100.161^\circ)) = (-0.176, 0.984)$$
$$\hat{n}_{s_{1}} = (\cos\theta_{s2}, \sin\theta_{s2}) = (\cos(-34.839^\circ), \sin(-34.839^\circ)) = (0.821, -0.571)$$
$$\hat{n}_{s_{2}} = (\cos\theta_{s1}, \sin\theta_{s1}) = (\cos(55.161^\circ), \sin(55.161^\circ)) = (0.571, 0.821)$$
---
ou, de maneira simplificada

![[q121.png]]


### Autovalores e autovetores
![[ps11#^autovaloreAutovetores]]


---
$$\det(\sigma - \lambda I) = 0$$
$$\sigma = \begin{bmatrix} 200 & 50 \\ 50 & -70 \end{bmatrix}$$
$$\lambda I = \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix}$$
$$(\sigma - \lambda I) = \begin{bmatrix} 200 & 50 \\ 50 & -70 \end{bmatrix} - \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} = \begin{bmatrix} 200 - \lambda & 50 \\ 50 & -70 - \lambda \end{bmatrix}$$
$$\det(\sigma - \lambda I) = \det \begin{bmatrix} 200 - \lambda & 50 \\ 50 & -70 - \lambda \end{bmatrix} = 0$$
---
$$(200-\lambda)(-70-\lambda) - (50)(50) = 0$$
$$-14000 - 200\lambda + 70\lambda + \lambda^2 - 2500 = 0$$
$$\lambda^2 - 130\lambda - 16500 = 0$$
$$\lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
$$\lambda = \frac{-(-130) \pm \sqrt{(-130)^2 - 4(1)(-16500)}}{2(1)}$$
$$\lambda = \frac{130 \pm \sqrt{16900 + 66000}}{2}$$
$$\lambda = \frac{130 \pm \sqrt{82900}}{2}$$
$$\lambda = \frac{130 \pm 287.923}{2}$$
$$\lambda_1 = \frac{130 + 287.923}{2} = \frac{417.923}{2}  \approx 208.962 \text{ MPa}$$
$$\lambda_2 = \frac{130 - 287.923}{2} = \frac{-157.923}{2}  \approx -78.962 \text{ MPa}$$
---
$$\lambda_{\text{medio}} = \frac{\lambda_{1} +\lambda_{2}}{2} = \frac{208.962 + (-78.962)}{2} = 65 \text{ MPa}$$
$$\tau_{\max}^{(2D)} = \frac{\sigma_1 - \sigma_2}{2} = \frac{208.962 - (-78.962)}{2} = 143.962 \text{ MPa}$$
---
$$([\sigma] - \lambda_{i} [I])\vec{v_{i}} = \vec{0}$$
$$([\sigma] - \lambda_{1} [I])\vec{v_{1}} = \vec{0}$$
$$\begin{bmatrix} 200 - 208.962 & 50 \\ 50 & -70 - 208.962 \end{bmatrix} \begin{bmatrix} v_{1x} \\ v_{1y} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
$$\begin{bmatrix} -8.962 & 50 \\ 50 & -278.962 \end{bmatrix} \begin{bmatrix} v_{1x} \\ v_{1y} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
Como queremos apenas uma proporção entre $v_{1x}$ e $v_{1y}$, necessitamos apenas de uma das equações e podemos escolher $v_{1y} = 1$ 
$$-8.962v_{1x} + 50v_{1y} = 0 \implies v_{1x} = \frac{50}{8.962}v_{1y} \approx 5.579v_{1y}$$
$$v_{1y} = 1 \implies v_{1x} = 5.579$$
$$\tan \theta_{p_{1}} = \frac{\sin \theta_{p_{1}}}{\cos \theta_{p_{1}}} = \frac{v_{1y}}{v_{1x}}$$
$$\theta_{p_{1}} = \arctan \left( \frac{v_{1y}}{v_{1x}} \right) = \arctan \left( \frac{1}{5.579} \right) \approx 10.14^\circ$$
Daqui em diante segue da mesma forma que pelo círculo de Mohr', answer = '$$\sigma_1 = 208,962 \, MPa \quad \sigma_2 = -78,962 \, MPa \quad \sigma_{\text{médio}} = 65 \, MPa$$
$$\tau_{\max}^{(2D)} = 143,962 \, MPa$$
$$\hat{n}_{p_{1}} = (0.984, 0.176) \quad \hat{n}_{p_{2}} = (-0.176, 0.984)$$
$$\hat{n}_{s_{1}} = (0.821, -0.571) \quad\hat{n}_{s_{2}} = (0.571, 0.821)$$', tags = 'ps10, ps11' WHERE question_number = 121;
UPDATE questions SET proposition = 'Seja um círculo $C$ de centro $C = (-3.5, 0)$ e raio $r$ desconhecido. Definem-se dois pontos $A$ e $B$ pertencentes a $C$ por $$ A = (2,\ y_a), \qquad B = (6,\ y_b). $$ Sabe-se que o ângulo central $$ \angle ACB = 90^\circ. $$ Determine os valores de $y_a$ e $y_b$.', step_by_step = '$$\overrightarrow{CA} = A - C = (2 - (-3.5), y_a - 0) = (5.5, y_a)$$$$\overrightarrow{CB} = B - C = (6 - (-3.5), y_b - 0) = (9.5, y_b)$$
![[ps33#^rotacao90graus]]

$$A = (5.5, -9.5) \quad B = (9.5, 5.5)$$', answer = '', tags = 'ps33' WHERE question_number = 122;
UPDATE questions SET proposition = 'Para a chapa da figura, submetida a $\sigma_{xx}$ e a uma variação de temperatura uniforme $\Delta T$, determine:

a) $\Delta T$ para que a dimensão $a$ não seja alterada.

b) Variação $\Delta b$ da dimensão $b$ para a situação em que $a$ não seja alterada, com $\Delta T$ e $\sigma_{xx}$ atuando.

Expresse os resultados em função de $\Delta T, \sigma_{xx}, E, \nu, a, b$ e $\alpha$
![[q123.png|]]
### Descrição da figura  %% fold %% 
A figura apresenta um diagrama de um corpo retangular, possivelmente uma placa ou um bloco, em duas dimensões.

Aqui está uma descrição detalhada dos elementos da figura:

- **Forma e Dimensões:** O corpo tem formato retangular com altura **a** e comprimento **b**.
    
- **Variação de Temperatura:** No centro do retângulo, a notação **ΔT** (delta T) indica que o corpo está sujeito a uma variação de temperatura.
    
- **Tensão Aplicada:** Nas faces verticais (de altura **a**), há setas apontando para fora, representando a aplicação de uma força de tração. A notação **σ_xx** (sigma xx) indica que se trata de uma **tensão normal** na direção do eixo x (horizontal).
    

Em resumo, a figura ilustra um problema típico de **termomecânica** ou **mecânica dos sólidos**, onde um corpo retangular está simultaneamente sujeito a uma variação de temperatura (ΔT) e a uma tensão mecânica de tração (σ_xx) em uma direção. Este tipo de análise é importante para entender como o material se deforma ou se comporta sob o efeito combinado de cargas térmicas e mecânicas.', step_by_step = '![[ps7#2 fórmulas principais]]

$$\varepsilon_{ij} = \frac{1}{2\mu} \sigma_{ij} - \frac{\nu}{E} \sigma_{kk} \delta_{ij} + \alpha \Delta T$$

$$\mu = \frac{E}{2(1+\nu)}$$
$$\frac{1}{2\mu} = \frac{1+\nu}{E}$$

$$\sigma_{yy} = \sigma_{zz} = 0$$

$$\varepsilon_{yy} = \frac{1}{2\mu} \sigma_{yy} - \frac{\nu}{E} (\sigma_{xx} + \sigma_{yy} + \sigma_{zz}) + \alpha \Delta T$$

$$\Delta T = \left[-\frac{1}{2\mu} \sigma_{yy} + \frac{\nu}{E} (\sigma_{xx} + \sigma_{yy} + \sigma_{zz})\right] \cdot \frac{1}{\alpha}$$

$$\Delta T = \left[-\frac{1+\nu}{E} \sigma_{yy} + \frac{\nu}{E} (\sigma_{xx} + \sigma_{yy} + \sigma_{zz})\right] \cdot \frac{1}{\alpha}$$

$$\Delta T = \frac{\nu}{E\alpha} \sigma_{xx}$$
---
$$\varepsilon_{xx} = \frac{1}{2\mu} \sigma_{xx} - \frac{\nu}{E} (\sigma_{xx} + \sigma_{yy} + \sigma_{zz}) + \alpha \Delta T$$

$$\varepsilon_{xx} = \frac{1+\nu}{E} \sigma_{xx} - \frac{\nu}{E} \sigma_{xx} + \frac{\nu}{E} \sigma_{xx}$$

$$\varepsilon_{xx} = \frac{1+\nu}{E} \sigma_{xx}$$

$$\Delta b = b(1+\varepsilon_{xx}) - b(1) = b \cdot \frac{1+\nu}{E} \sigma_{xx}$$', answer = '$$\Delta T = \frac{\nu}{E\alpha} \sigma_{xx}$$
$$\Delta b = b \cdot \frac{1+\nu}{E} \sigma_{xx}$$', tags = 'ps7' WHERE question_number = 123;
UPDATE questions SET proposition = 'Para a chapa ao lado, $\sigma_{xx} = 20 MPa, \varepsilon_{yy}=0, E = 2 \times 10^5 MPa, \nu=0.3 \text{ e } \alpha=10^{-6}/^{\circ}C$

a) Determine $\sigma_{yy}$ para $\Delta T=0$
b) Determine $\Delta T$ para que $\sigma_{yy}$ seja nulo. Considere $\sigma_{zz}=\sigma_{xz}=\sigma_{yz}=0$
c) Verifique se haverá escoamento do material da placa sabendo que $\sigma_{escoamento} = 400 MPa$. Faça sua verificação considerando:
c.1) Critério de TRESCA
c.2) Critério de Von Mises.

![[q124.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 124;
UPDATE questions SET proposition = 'Uma chapa de alumínio ($E=7.2 \times 10^{10} N/m^2$ e $\nu=0.33$) está submetida ao estado plano de tensões indicado na figura. Determine:
a) Componentes principais tensões.
b) Componentes principais deformação.
c) Deformação longitudinal na direção de $30^{\circ}$ (sentido anti-horário) com eixo $x$.

![[q125.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 125;
UPDATE questions SET proposition = 'Para a chapa da figura, determine:
a) $\sigma_{yy}$ para que a dimensão "$b$" não altere.
b) Variação $\Delta a$ da dimensão "$a$" na situação da letra (a).

Expresse seus resultados em termos de $E, \nu, \sigma_{xx}, "a"$ e "$b"$. $\sigma_{xx}$ e $\sigma_{yy}$ são uniformemente distribuídas.
![[q126.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 126;
UPDATE questions SET proposition = 'Um ponto do contínuo está submetido ao tensor $[\sigma]$ indicado. Determine:
$$[\sigma] = \begin{bmatrix} 200 & -50 & 0 \\ -50 & 100 & 0 \\ 0 & 0 & 300 \end{bmatrix} MPa$$

a) Direções em que devem ser instalados os extensômetros no plano $(x,y)$, para registrar as componentes principais de deformação. ($E=2 \times 10^{11} Pa, \nu=0.3$)
b) Os valores destas componentes principais de deformação.', step_by_step = '', answer = '', tags = '' WHERE question_number = 127;
UPDATE questions SET proposition = 'Para a placa do prob. [[q126]], considere $\sigma_{yy}=0$. Determine:
a) $\Delta T$ para que a dimensão "$b$" não altere.
b) Variação $\Delta a$ da dimensão "$a$" na situação da letra (a), ou seja, com $\Delta T$ e $\sigma_{xx}$ atuando. Resultados em função de $E, \nu, \sigma_{xx}, "a", "b"$ e $\alpha$.', step_by_step = '', answer = '', tags = '' WHERE question_number = 128;
UPDATE questions SET proposition = 'Uma chapa quadrada de lado igual a $600 mm$ e espessura igual a $15 mm$, feita de aço ($E=2,0 \times 10^5 MPa; \nu=0,3$) é submetida a uma tração tal que: $\epsilon_{yy}=0, \sigma_{zz}=\sigma_{xz}=\sigma_{yz}=0$ (estado plano de tensão), $\sigma_{xx} = \sigma_I = 800 MPa$.

Determine:
a) $\sigma_{yy} = \sigma_{II}$ (componente principal)
b) Dimensões finais da placa, após deformação da mesma. Considere material linear elástico.
c) Verifique se haverá escoamento da placa.
c.1) segundo TRESCA ($\tau_{escoamento} = 400 MPa$)
c.2) Segundo Von MISES.

![[q129.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 129;
UPDATE questions SET proposition = 'Para a barra da figura ao lado, submetida à variação de temperatura $\Delta T$, determine:

a) $\Delta T_e$ para que a barra encoste no apoio B sem gerar tensão normal na barra (expresse o resultado em termos de $\Delta, \alpha, \text{e } L$).
b) Tensor tensão e tensor deformação para $\Delta T \leq \Delta T_e$. (em termos de $E, \alpha \text{ e } \Delta T$)
c) Tensor tensão e tensor deformação para $\Delta T > \Delta T_e$. (em termos de $E, \alpha, \Delta, L \text{ e } \Delta T$)
d) Expresse a condição de Tresca em função de $E, \alpha, \Delta, L \text{ e } \Delta T \text{ e } \sigma_{esc}$ para que não ocorra escoamento.
![[q130.png]]', step_by_step = '', answer = '', tags = '' WHERE question_number = 130;
