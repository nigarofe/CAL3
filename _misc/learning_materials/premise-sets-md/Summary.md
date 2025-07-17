**Conjunto de premissas última vez utilizado na disciplina...**



# [Algebra](https://en.wikipedia.org/wiki/Algebra)


# [Continuum mechanics](https://en.wikipedia.org/wiki/Continuum_mechanics)
- [[ps3]] Por que o tensor tensão é simétrico
- [[ps5]] Tensor Tensão vs Tensor Deformação
- [[ps6]] Nome das variáveis e tensores mais utilizados em Mecânica dos sólidos

- [[ps9]] Definição coeficiente de Poisson
- [[ps10]] Ângulos diretores e cossenos diretores

- [[ps11]] Análise de tensões em um corpo estático (Elemento de estresse e círculo de Mohr)
	- A questão [[q121]] exemplifica muito bem
>[!attention] Aprender a fazer círculo de mohr 3D para preencher [[q96]] e [[ps11]]

- [[ps15]] Relação entre estresse e pressão

## Fórmulas principais
- **Deformação** em função de **Tensão**, Coeficiente de **Poisson** e **Módulo de Elasticidade**
- **Tensão** em função de **Deformação**, Coeficiente de **Poisson** e **Módulo de Elasticidade**
	- [[ps7]] Lei de Hooke Generalizada (ou Tridimensional)

- **Tensões** transformadas em função de **tensões não** transformadas
- **Deformações** transformadas em função de **deformações não** transformadas
	- [[ps4]] Rotação de tensor (tensão e deformação) por meio de multiplicação de matrizes
	- [[ps34]] Rotação de tensor (tensão e deformação) por meio de fórmulas -> memorização
**Critérios de escoamento**
	- [[ps35]]

- Variáveis em função de Coeficiente de **Poisson** e **Módulo de Elasticidade**
	- [[ps8]] Constantes elásticas em materiais isotrópicos
	



>[!info] Métodos equivalentes
>As fórmulas desses métodos podem ser derivadas uns dos outros. Porém, usar uma das primeiras duas fórmulas geralmente é mais prático
>$$\sigma_{ii} = \left(\frac{\sigma_{xx} + \sigma_{yy}}{2}\right) + \left(\frac{\sigma_{xx} - \sigma_{yy}}{2}\right) \cos(2\theta) + \tau_{xy} \sin(2\theta)$$
>$$\tau_{ij} = -\frac{\sigma_{xx} - \sigma_{yy}}{2}\sin(2\theta) + \tau_{xy}\cos(2\theta)$$ Veja [[ps34]]
>
>---
>$$\sigma' = [L] [\sigma] [L^T] \quad \varepsilon' = [L] [\varepsilon] [L^T]$$  Veja [[ps4]]
>
>---
>$$\text{Círculo de Mohr}$$  Veja [[ps11]]
>
>---
>![[ps11#^autovaloreAutovetores]] Veja [[ps11]]

---
- Introdução à mecânica dos sólidos





# [Linear Algebra](https://en.wikipedia.org/wiki/Linear_algebra)

- [[ps32]] Matriz identidade e Delta de Kronecker

| ps       | Nome da operação                                                                 | Notação                | Entrada 1    | Entrada 2    | Resultado    |
| -------- | -------------------------------------------------------------------------------- | ---------------------- | ------------ | ------------ | ------------ |
| -        | [Multiplicação por escalar](https://en.wikipedia.org/wiki/Scalar_multiplication) | $\alpha  \vec b$       | Escalar      | Vetor        | Vetor        |
| [[ps24]] | [Produto escalar]((https://en.wikipedia.org/wiki/Dot_product))                   | $\vec a \cdot \vec b$  | Vetor        | Vetor        | Escalar      |
| [[ps25]] | [Produto vetorial](https://en.wikipedia.org/wiki/Cross_product)                  | $\vec a \times \vec b$ | Vetor        | Vetor        | Vetor        |
| [[ps26]] | [Determinante](https://en.wikipedia.org/wiki/Determinant)                        | $\det A$               | Matriz       | -            | Escalar      |
| [[ps27]] | [Multiplicação de matrizes](https://en.wikipedia.org/wiki/Matrix_multiplication) | $A \times B$           | Matriz (m×n) | Matriz (n×p) | Matriz (m×p) |
| -        | [Produto Hadamard](https://en.wikipedia.org/wiki/Hadamard_product_(matrices))    | $A \odot B$            | Matriz (m×n) | Matriz (m×n) | Matriz (m×n) |
| [[ps33]] | [Rotação de vetor](https://en.wikipedia.org/wiki/Rotation_matrix)                | $$R\vec{v}$$           |              |              |              |
^tabelaDeAlgebraLinear

| Operação         | Fórmula                                                               | Mede o quão...             | Expressão normalizada                                                                      |
| ---------------- | --------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| Produto escalar  | $$a\cdot b = \lVert a\rVert \lVert b\rVert \cos\theta$$               | paralelos/alinhados        | $$\frac{a\cdot b}{\lVert a\rVert \lVert b\rVert} = \cos\theta$$                            |
| Produto vetorial | $$\lVert a\times b\rVert = \lVert a\rVert \lVert b\rVert \sin\theta$$ | ortogonais/perpendiculares | $$\lvert \sin\theta\rvert = \frac{\lVert a\times b\rVert}{\lVert a\rVert \lVert b\rVert}$$ |






# [Geometry](https://en.wikipedia.org/wiki/Geometry) and [Analytic Geometry](https://en.wikipedia.org/wiki/Analytic_geometry)
1. [[ps18]] Relações trigonométricas

$z = x^2 + y^2$ São círculos de um raio $\sqrt z$ a uma altura $z$; um paraboloide que abre à medida que se afasta do centro. Definido em $z+$ e $z-$

$z^2 = x^2 + y^2$ São círculos de um raio $z$ a uma altura $z$, ou seja, um cone invertido; um cone que abre à medida que se afasta do centro. Definido apenas em $z+$






# [Differential equation](https://en.wikipedia.org/wiki/Differential_equation)
1. [[ps12]] EDO Linear Homogênea de 2ª ordem com coeficientes constantes
2. [[ps13]] EDO Linear **Não** Homogênea de 2ª ordem com coeficientes constantes
3. [[ps20]] EDO's Básicas
---
- Equações Diferenciais A
- Equações Diferenciais B







# [Calculus](https://en.wikipedia.org/wiki/Calculus)
- [[ps17]] Técnicas básicas de derivação e integração
- [[ps31]] Diferentes notações de funções, superfícies e outros

- [[ps22]] Introdução à campos escalares e vetoriais
- [[ps28]] Introdução ao campo gradiente, operador Nabla e notação para Teorema de Green, Teorema de Stokes e Teorema da divergência

 
- [[ps1]] Arc length of a curve; Line integrals of scalar and vector fields; Line integral of a **conservative** vector field in 2D
- [[ps30]] Fluxo, densidade de fluxo e integrais de superfície


- [[ps19]] Green's Theorem; Stokes's Theorem; Divergence Theorem
- [[ps21]] Green's Theorem as a special case of Stokes's Theorem
- [[ps2]] Table of elements of integrations in different integral and field types

- [[ps29]] Como encontrar o vetor tangente e plano tangente à um ponto de uma função


---
- Cálculo Diferencial e Integral 1
- Cálculo Diferencial e Integral 2
- Cálculo Diferencial e Integral 3



















# [Classical Mechanics](https://en.wikipedia.org/wiki/Classical_mechanics)
1. [[ps14]] Momento de inércia e constante de torção
2. [[ps16]] Movimento sub-amortecido
---
- Mecânica Fundamental
- Fundamentos de Oscilações e Ondas