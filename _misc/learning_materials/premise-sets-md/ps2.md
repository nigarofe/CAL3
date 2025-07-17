
  

$$\int_C f \, ds = \int_{t=a}^{t=b} f(\vec{r}(t)) \|\vec{r}'(t)\| \, dt$$

$$\int_C \vec{F} \cdot d\vec{r} = \int_{t=a}^{t=b} \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) \, dt$$

$$\iint_S f \, dS = \iint_D f(\vec{r}(u,v)) \|\vec{r}_u \times \vec{r}_v\| \, dA_{(du,dv)}$$

$$\iint_S \vec{F} \cdot d\vec{S} = \iint_D \vec{F}(\vec{r}(u,v)) \cdot (\vec{r}_u \times \vec{r}_v) \, dA_{(du,dv)}$$


Caso Específico (para uma superfície $z = g(x, y)$ sobre uma região $D$ com orientação para cima):
$$\iint_S f(x, y, z) \, dS = \iint_D f(x, y, g(x, y)) \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA_{(dx,dy)}$$
$$\iint_S \vec{F} \cdot d\vec{S} = \iint_D \vec{F}(x, y, g(x, y)) \cdot \left(-\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1\right) \, dA_{(dx,dy)}$$



o elemento de área dA no domínio dos parâmetros u e v