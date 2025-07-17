# Equações Constitutivas da Elasticidade Linear Isotrópica
Este é o nome mais formal e completo. "Constitutiva" porque descreve a constituição (o comportamento intrínseco) do material. "Elasticidade Linear" porque a relação entre tensão e deformação é linear (se você dobrar a tensão, dobra a deformação) e elástica (o material retorna à sua forma original). "Isotrópica" porque as propriedades do material são as mesmas em todas as direções.




## Resumo Lei de Hooke Generalizada (ou Tridimensional)

- Lei constitutiva que relaciona tensão com a deformação total e a temperatura
- Lei constitutiva que relaciona deformação com a tensão total e a temperatura
### 2 fórmulas principais
$$\sigma_{ij} = 2\mu \,\varepsilon_{ij} + \lambda \,(\varepsilon_{kk})\delta_{ij} -(3\lambda + 2\mu)\alpha\Delta T$$
$$\varepsilon_{ij} = \frac{1}{2\mu} \, \sigma_{ij} \;-\; \frac{\nu}{E} \, (\sigma_{kk}) \, \delta_{ij} +(\alpha \Delta T)\delta_{ij}$$
$$\mu= \frac{E}{2(1+\nu)} \quad\lambda = \frac{\nu E}{(1 + \nu)(1 - 2\nu)}$$

### Equações da tensão
- Calcula a tensão gerada por uma deformação conhecida.
$$\sigma_{ij} = \frac{E}{1 + \nu}\varepsilon_{ij} + \frac{\nu E}{(1 + \nu)(1 - 2\nu)}(\varepsilon_{kk})\delta_{ij} \quad \text{(Fórmula geral)}$$
$$\sigma_{ij} = 2\mu \,\varepsilon_{ij} + \lambda \,(\varepsilon_{kk})\delta_{ij}$$
$$\sigma_{ii} = \frac{E}{(1 + \nu)(1 - 2\nu)}\left((1 - \nu)\varepsilon_{ii} + \nu \sum_{j \neq i}\varepsilon_{jj}\right) \quad \text{(Componentes normais)}$$
$$\tau_{ij} = \frac{E}{1 + \nu}\varepsilon_{ij} = 2\mu \,\varepsilon_{ij}\quad \text{para } i \neq j \quad \text{(Componentes de cisalhamento)}$$
^equacoesDaTensao

### Equações da deformação
- Calcula a deformação resultante de uma tensão conhecida.
$$\varepsilon_{ij} = \frac{1 + \nu}{E} \, \sigma_{ij} \;-\; \frac{\nu}{E} \, (\sigma_{kk}) \, \delta_{ij}  \quad \text{(Fórmula geral)}$$
$$\varepsilon_{ij} = \frac{1}{2\mu} \, \sigma_{ij} \;-\; \frac{\nu}{E} \, (\sigma_{kk}) \, \delta_{ij} $$
$$\varepsilon_{ii} = \frac{1}{E} \Bigl(\sigma_{ii} \;-\; \nu \sum_{j \neq i} \sigma_{jj}\Bigr)  \quad \text{(Componentes normais)}$$
$$\varepsilon_{ij} = \frac{\gamma_{ij}}{2}= \frac{1 + \nu}{E} \, \tau_{ij}  =\frac{1}{2\mu}\, \tau_{ij}\quad \text{(Componentes de cisalhamento)}$$
^equacoesDaDeformacao




## Equações tensão plana
Por manipulação algébrica, obtém-se as duas fórmulas abaixo para estado de **tensão plana** $(\sigma_{zz} = 0,\; \sigma_{xz} = \sigma_{yz} = 0)$

$$\varepsilon_{zz} = -\frac{\nu}{1-\nu}(\varepsilon_{xx} + \varepsilon_{yy})$$
$$\sigma_{xx} = \frac{E}{1-\nu^2}(\varepsilon_{xx} + \nu\varepsilon_{yy})$$
$$\sigma_{yy} = \frac{E}{1 - \nu^2}(\varepsilon_{yy} + \nu\varepsilon_{xx})$$
$$\tau_{xy} = \frac{E}{2(1 + \nu)}\gamma_{xy}$$^equacoesTensaoPlana








## Interpretação das fórmulas para ajudar a memorizar

$$
\varepsilon_{ii} = \frac{1}{E} \Bigl(\sigma_{ii} \;-\; \nu \sum_{j \neq i} \sigma_{jj}\Bigr)  \quad \text{(Componentes normais)}
$$
Se o coeficiente de Poisson de um material for 0, uma deformação normal do corpo daquele material não vai se importar com tensões nas outras direções, só na direção normal à ela. 
Porém, quanto maior o coeficiente de Poisson, mais a deformação vai se importar com as outras tensões normais, pois as deformações que elas estão tentando causar no corpo sobrepõe com a deformação da tensão normal sendo analisada. Ou seja, se ocorrer tração nas tensões $jj$, elas vão atrapalhar a deformação que a tensão $ii$ causaria, e se fossem de compressão, ajudariam, por isso o sinal negativo.



$$
\varepsilon_{ij} = \frac{1 + \nu}{E} \, \tau_{ij} = \frac{1}{2} \,{J} \, \tau_{i} \quad \text{(Componentes de cisalhamento)}
$$

A deformação de cisalhamento no plano de um corpo é a metade de sua conformidade ao cisalhamento $(J)$ vezes a tensão de cisalhamento naquele plano









## Forma geral em tensores (componentes arbitrárias $i, j$)
$$
\varepsilon_{ij} = \frac{1 + \nu}{E} \, \sigma_{ij} \;-\; \frac{\nu}{E} \, (\sigma_{kk}) \, \delta_{ij}
$$
onde

- $\varepsilon_{ij}$ são as componentes do tensor deformação,
- $\sigma_{ij}$ são as componentes do tensor tensão,
- $E$ é o módulo de Young,
- $\nu$ é o coeficiente de Poisson,
- $\sigma_{kk} = \sigma_{11} + \sigma_{22} + \sigma_{33}$ (soma de tensões normais),
- $\delta_{ij}$ é o delta de Kronecker.

## Fórmula para componentes normais (diagonais) da deformação
Para $i = 1, 2, 3$,
$$
\varepsilon_{ii} = \frac{1}{E} \Bigl(\sigma_{ii} \;-\; \nu \sum_{j \neq i} \sigma_{jj}\Bigr)
$$

Isso equivale, em cada direção principal $i$, a
$$
\varepsilon_{11} = \frac{1}{E}\bigl(\sigma_{11} \;-\; \nu \,[\sigma_{22} + \sigma_{33}]\bigr)
$$
$$
\varepsilon_{22} = \frac{1}{E}\bigl(\sigma_{22} \;-\; \nu \,[\sigma_{11} + \sigma_{33}]\bigr)
$$
$$
\varepsilon_{33} = \frac{1}{E}\bigl(\sigma_{33} \;-\; \nu \,[\sigma_{11} + \sigma_{22}]\bigr)
$$

## Fórmula para componentes de cisalhamento
Para $i \neq j$, ou seja, $i, j = 1, 2, 3$ com $i \neq j$,
$$
\varepsilon_{ij} = \frac{1 + \nu}{E} \, \tau_{ij}
$$

