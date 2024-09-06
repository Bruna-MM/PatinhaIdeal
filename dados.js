//informações de banco de dados
let dados= [
    //gerais
    {    
    titulo:"Cachorro",
    descricao:"<p>Descrição: Mamífero carnívoro, domesticado há milênios, conhecido por sua lealdade e companheirismo.<p>Características: Grande variedade de raças, tamanhos, pelagens e temperamentos.  <p>Cuidados: Necessitam de passeios regulares, alimentação balanceada, treinamento e cuidados veterinários.<p>Temperamento: Varia muito de acordo com a raça e a socialização. Podem ser desde calmos e dóceis até enérgicos e protetores.<p>Vida útil: Varia de acordo com a raça, mas em média vivem entre 10 e 15 anos.",
    link:"https://www.purina.pt/encontrar-animal/racas-caes",
    tag:"dog cachorrinho cachoro cão cachorra"
},

{   titulo: "Gato",
    descricao: "<p>Descrição: Mamífero carnívoro, conhecido por sua independência e elegância. <p>Características: Necessitam de uma caixa de areia, brinquedos e carinho. <p>Temperamento: Varia de acordo com a raça e a socialização, podendo ser independente ou sociável. <p>Vida útil: Em média 12-15 anos.",
    link: "https://www.worldcat.org/pt/oclc/45951126"
},
{
    titulo: "Cavalo",
    descricao: "<p>Descrição: Mamífero ungulado, domesticado há milênios, utilizado para diversas atividades. <p>Características: Necessitam de espaço para pastar, alimentação balanceada e cuidados veterinários regulares. <p>Temperamento: Varia de acordo com a raça e a doma, podendo ser calmo, enérgico ou nervoso. <p>Vida útil: Em média 25-30 anos.",
    link: "https://www.cbh.org.br/"
},

{
    titulo: "Cobra",
    descricao: "<p>Descrição: Réptil alongado e sem pernas, com grande variedade de tamanhos e cores. <p>Características: Necessitam de um terrário adequado com temperatura e umidade controladas. A alimentação varia de acordo com a espécie. <p>Temperamento: Varia muito entre as espécies, desde dóceis até agressivas. <p>Vida útil: Varia amplamente, dependendo da espécie.",
    link: "https://www.petlove.com.br/dicas/cobras-como-ter-uma-de-estimacao?gad_source=1&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLBH2jxhYVaSxnu2Ed3f6D7X5zc-VeRBNXaxyDqMHhZghYiOnlZ0O4aApXuEALw_wcB"
},
{
    titulo: "Pássaro",
    descricao: " <p>Descrição: Vertebrado de sangue quente, com penas e capacidade de voar. <p>Características: Necessitam de uma gaiola espaçosa com poleiros, brinquedos e uma dieta balanceada de sementes, frutas e verduras. <p>Temperamento: Varia muito entre as espécies, desde calmos até muito ativos. <p>Vida útil: Varia amplamente, dependendo da espécie.",
    link: "https://www.passarosbrasil.com.br/"
},
{
    titulo: "Hamster",
    descricao: "<p>Descrição: Roedor pequeno e noturno, conhecido por sua atividade e curiosidade. <p>Características: Necessitam de uma roda de exercício, esconderijos e uma dieta rica em sementes e grãos. <p>Temperamento: Solitário e territorial, mas pode ser dócil com seus donos. <p>Vida útil: Em média 2-3 anos.",
    link: "https://www.petz.com.br/blog/cuidados-com-hamster/"
},
{
    titulo: "Peixe",
    descricao: "<p>Descrição: Vertebrado aquático, com grande variedade de formas, cores e tamanhos. <p>Características: Necessitam de um aquário com filtragem adequada, temperatura controlada e oxigenação. A alimentação varia de acordo com a espécie. <p>Temperamento: Varia muito entre as espécies, desde pacíficos até agressivos. <p>Vida útil: Varia amplamente, dependendo da espécie.",
    link: "https://www.petz.com.br/blog/aquario/"
},
{
    titulo: "Tartaruga",
    descricao: "<p>Descrição: Réptil de casco rígido, conhecido por sua longevidade. Lenta, herbívora e solitária. <p>Características: Necessitam de um terrário adequado com lâmpada de UVB, substrato adequado, água para banho e uma dieta rica em vegetais. <p>Temperamento: Calma e tranquila. <p>Vida útil: Podem viver várias décadas, dependendo da espécie.",
    link: "https://www.petz.com.br/blog/tartarugas/"
},

{
    titulo: "Porquinho da India",
    descricao: "<p>Descrição:Roedor sociável e curioso, popular como animal de estimação. Pelagem macia e densa, em diversas cores e padrões. São animais diurnos e muito ativos.<p>Características:Necessitam de uma gaiola espaçosa com esconderijos, objetos para roer e uma dieta rica em feno, verduras e legumes. A higiene é fundamental, com a limpeza regular da gaiola e a troca da água.<p>Temperamento:Geralmente dócil e curioso, mas pode morder se se sentir ameaçado.<p>Vida útil:Em média 5-7 anos, mas podem viver até 8 anos.",
    link: "https://www.petlove.com.br/dicas/como-cuidar-bem-de-um-porquinho-da-india/amp?gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfJcrHNTY9t7KFGboq3avqLLVTib4Rdx5sgy3kAVgnQaYVPsfnPxCGxoCWd4QAvD_BwE"
},
    {
        titulo: "Dachshund (Salsicha)",
        descricao: "<p>Descrição: Raça de cão de caça com corpo alongado e pernas curtas, originária da Alemanha. Conhecida por sua personalidade forte e lealdade.</p><p>Características: Três variedades de tamanho (padrão, miniatura e coelho), pelagem curta, longa ou dura. Orelhas grandes e caídas, focinho alongado e olhos expressivos.</p><p>Temperamento: Independentes, teimosos e com um alto instinto de caça. São leais aos seus donos e podem ser protetores.</p><p>Cuidados: Necessitam de cuidados com a coluna devido à sua conformação física. A obesidade é um problema comum, por isso a alimentação deve ser controlada. A socialização desde cedo é fundamental.</p>",
        link: "https://www.cbkc.org.br/racas/dachshund/",
},
//cachorros
{
    titulo: "Labrador Retriever",
    descricao: "<p>Descrição: Raça de porte médio a grande, originária do Canadá. Conhecidos por sua lealdade, inteligência e amor pela água. Pelagem curta e densa, em cores como preto, amarelo e chocolate. <p>Características: São excelentes cães de família, amigáveis e pacientes com crianças. Necessitam de atividades físicas regulares. <p>Temperamento: Alegre, sociável e dócil. <p>Vida útil: Em média 10-12 anos.",
    link: "https://www.cbkc.org/racas/labrador-retriever/"
},
{
    titulo: "Shih Tzu (Shitzu)",
    descricao: "<p>Descrição: Raça de companhia originária da China, conhecida por sua pelagem longa e sedosa. É um cão alegre, companheiro e adaptável a diferentes ambientes.</p>",
    link: "https://www.cbkc.org.br/cbkc/racas/shih-tzu/"
},
{
    titulo: "Maltês(Maltes)",
    descricao: "<p>Descrição: Pequeno cão de companhia, conhecido por sua pelagem branca e longa, que requer cuidados especiais. É um cão alegre, inteligente e leal.</p>",
    link: "https://www.cbkc.org.br/cbkc/racas/maltes/"
},

{
    titulo: "Bulldog Inglês",
    descricao: "<p>Descrição: Raça de porte médio, originária da Inglaterra. Conhecidos por sua aparência musculosa e rosto achatado. <p>Características: São cães tranquilos e leais, mas podem ser teimosos. <p>Temperamento: Calmo, gentil e paciente. <p>Vida útil: Em média 8-10 anos.",
    link: "https://www.cbkc.org/racas/bulldog-ingles/",
},
{
    titulo: "Husky Siberiano",
    descricao: "<p>Descrição: Raça de porte médio a grande, originária da Sibéria. Conhecidos por seus olhos azuis e pelagem espessa. <p>Características: São cães de trabalho, utilizados para puxar trenós. Necessitam de muito exercício físico. <p>Temperamento: Energético, independente e inteligente. <p>Vida útil: Em média 12-15 anos.",
    link: "https://www.cbkc.org/racas/husky-siberiano/",
  
},
{
    titulo: "Chihuahua",
    descricao: "<p>Descrição: A menor raça canina reconhecida, originária do México. Conhecidos por sua personalidade forte e latido alto. <p>Características: São cães companheiros e leais, mas podem ser um pouco ciumentos. <p>Temperamento: Valente, alerta e curioso. <p>Vida útil: Em média 15-18 anos.",
    link: "https://www.cbkc.org/racas/chihuahua/",
},{
    titulo: "Border Collie",
    descricao: "<p>Descrição: Raça de pastoreio originária da Escócia. Conhecidos por sua inteligência excepcional e energia inesgotável. <p>Características: Pelagem dupla, olhos expressivos e corpo ágil. <p>Temperamento: Ágil, inteligente e obediente. Necessita de atividades físicas e mentais constantes. <p>Vida útil: Em média 12-15 anos.",
    link: "https://www.cbkc.org/racas/border-collie/",
},
{
    titulo: "Poodle",
    descricao: "<p>Descrição: Raça de companhia originária da Alemanha. Conhecidos por sua pelagem encaracolada e inteligência. Existem três tamanhos: padrão, miniatura e toy. <p>Características: Pelagem hipoalergênica e fácil de cuidar. <p>Temperamento: Inteligente, ativo e sociável. <p>Vida útil: Em média 12-15 anos.",
    link: "https://www.cbkc.org/racas/poodle/",
},
{
    titulo: "Schnauzer",
    descricao: "<p>Descrição: Raça de origem alemã, conhecida por sua pelagem áspera e barba característica. Existem três variedades: miniatura, standard e gigante. São cães inteligentes, leais e versáteis, com um temperamento alerta e enérgico.</p>",
    link: "https://www.cbkc.org.br/racas/schnauzer/"
},
{
    titulo: "Beagle",
    descricao: "<p>Descrição: Raça de caça originária da Inglaterra, conhecida por seu olfato apurado e personalidade alegre. São cães amigáveis, sociáveis e curiosos.</p>",
    link: "https://www.cbkc.org.br/racas/beagle/"
},
{
    titulo: "Dachshund (Salsicha)",
    descricao: "<p>Descrição: Raça de cão de caça com corpo alongado e pernas curtas, originária da Alemanha. Conhecida por sua personalidade forte e lealdade.</p><p>Características: Três variedades de tamanho (padrão, miniatura e coelho), pelagem curta, longa ou dura. Orelhas grandes e caídas, focinho alongado e olhos expressivos.</p><p>Temperamento: Independentes, teimosos e com um alto instinto de caça. São leais aos seus donos e podem ser protetores.</p><p>Cuidados: Necessitam de cuidados com a coluna devido à sua conformação física. A obesidade é um problema comum, por isso a alimentação deve ser controlada. A socialização desde cedo é fundamental.</p>",
    link: "https://www.cbkc.org.br/racas/dachshund/",
},
{
    titulo: "Golden Retriever",
    descricao: "<p>Descrição: Raça de porte médio a grande, originária da Escócia. Conhecidos por sua pelagem dourada, personalidade amável e amor à água. São excelentes cães de família e trabalho.</p>",
    link: "https://www.cbkc.org.br/racas/golden-retriever/"
},
{
    titulo: "Pastor Alemão",
    descricao: "<p>Descrição: Raça de pastoreio originária da Alemanha. Conhecidos por sua lealdade, inteligência e versatilidade. São amplamente utilizados como cães de trabalho em diversas áreas, como polícia, guarda e assistência.</p>",
    link: "https://www.cbkc.org.br/racas/pastor-alemao/"
},

{
    titulo: "Lhasa Apso",
    descricao: "<p>Descrição: Raça de pequeno porte originária do Tibete, conhecida por sua pelagem longa e sedosa. Historicamente, eram cães de companhia de monges budistas.</p><p>Características: Corpo robusto, focinho alongado e expressão alerta. A pelagem pode variar em cores como branco, dourado, cinza e preto.</p><p>Temperamento: Independentes, inteligentes e com um senso de proteção bem desenvolvido. Podem ser reservados com estranhos, mas são leais e afetuosos com a família.</p><p>Cuidados: Requerem cuidados regulares com a pelagem, que precisa ser escovada diariamente. A socialização desde cedo é fundamental para um comportamento equilibrado.</p>",
    link: "https://www.petz.com.br/cachorro/racas/lhasa-apso/",
   
},
{
    titulo: "Yorkshire Terrier",
    descricao: "<p>Descrição: Raça de pequeno porte, originária da Inglaterra. Conhecidos por sua pelagem longa e sedosa. São cães inteligentes, alertas e companheiros leais.</p>",
    link: "https://www.cbkc.org.br/racas/yorkshire-terrier/"
},
{
    titulo: "Bulldog Francês",
    descricao: "<p>Descrição: Raça de pequeno porte, originária da França. Conhecidos por sua aparência única e temperamento amigável. São cães tranquilos e companheiros leais.</p>",
    link: "https://www.cbkc.org.br/racas/bulldog-frances/"
},
{
    titulo: "Rottweiler",
    descricao: "<p>Descrição: Raça de grande porte, originária da Alemanha. Conhecidos por sua força, lealdade e instinto protetor. São cães inteligentes e obedientes.</p>",
    link: "https://www.cbkc.org.br/racas/rottweiler/"
},
{
    titulo: "Doberman Pinscher",
    descricao: "<p>Descrição: Raça de médio a grande porte, originária da Alemanha. Conhecidos por sua elegância, inteligência e lealdade. São cães protetores e vigilantes.</p>",
    link: "https://www.cbkc.org.br/racas/doberman-pinscher/"
},
{
    titulo: "Pointer Inglês",
    descricao: "<p>Descrição: Raça de caça originária da Inglaterra, conhecida por sua beleza e habilidade de apontar a presa. São cães ativos, enérgicos e inteligentes.</p>",
    link: "https://www.cbkc.org.br/racas/pointer-ingles/"
},
{
    titulo: "Cocker Spaniel Inglês",
    descricao: "<p>Descrição: Raça de caça originária da Inglaterra, conhecida por sua pelagem sedosa e personalidade alegre. São cães ativos, amigáveis e leais.</p>",
    link: "https://www.cbkc.org.br/racas/cocker-spaniel-ingles/"
},
//fazenda
{
    titulo: "Ovelha Merino",
    descricao: "<p>Descrição: Raça ovina conhecida por sua lã fina e de alta qualidade, amplamente utilizada na indústria têxtil.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/ovinocultura"
},
{
    titulo: "Vaca Jersey",
    descricao: "<p>Descrição: Raça bovina leiteira conhecida por seu leite rico em gordura e proteína, ideal para a produção de queijos.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/bovinocultura-de-leite"
},
{
    titulo: "Porco Berkshire",
    descricao: "<p>Descrição: Raça suína conhecida por sua carne marmorizada e saborosa, considerada uma das melhores para consumo.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/suinocultura"
},
//peixes
{
    titulo: "Betta",
    descricao: "<p>Descrição: Peixe de briga siamês, conhecido por suas cores vibrantes e barbatanas exuberantes. É um peixe territorial e requer um aquário individual.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Peixe Dourado",
    descricao: "<p>Descrição: Um dos peixes de aquário mais populares, conhecido por sua variedade de cores e formas. Requer um aquário grande e bem filtrado.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Tetra Neon",
    descricao: "<p>Descrição: Peixe pequeno e colorido, ideal para aquários comunitários. Conhecido por sua listra neon brilhante.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Guppy",
    descricao: "<p>Descrição: Peixe pequeno e vivíparo, fácil de cuidar e se reproduzir. Ideal para iniciantes na aquariofilia.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Palhaço",
    descricao: "<p>Descrição: Peixe conhecido por sua relação simbiótica com anêmonas. Popularizado pelo filme Procurando Nemo.</p>",
    link: "https://www.aquariomania.com.br/peixe-palhaco/"
},
{
    titulo: "Tang",
    descricao: "<p>Descrição: Peixe cirurgião, conhecido por suas barbatanas afiadas. Requer um aquário grande e com boa filtragem.</p>",
    link: "https://www.aquariomania.com.br/peixe-tang/"
},

// gatos
{
    titulo: "Siamês",
    descricao: "<p>Descrição: Gatos conhecidos por sua pelagem curta e brilhante, olhos azuis e miados característicos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Persa",
    descricao: "<p>Descrição: Gatos de pelo longo e sedoso, com focinho achatado e olhos grandes e expressivos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Maine Coon",
    descricao: "<p>Descrição: Uma das maiores raças de gatos domésticos, com pelo longo e espesso, originária do estado de Maine, nos Estados Unidos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Bengal",
    descricao: "<p>Descrição: Raça híbrida, com aparência de gato selvagem, conhecida por sua pelagem manchada e energética.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Sphynx",
    descricao: "<p>Descrição: Gato sem pelo, conhecido por sua pele quente e rugosa.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Abissínio",
    descricao: "<p>Descrição: Uma das mais antigas raças de gatos domésticas, com pelagem curta e tigrada.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Scottish Fold",
    descricao: "<p>Descrição: Gato conhecido por suas orelhas dobradas para frente.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Ragdoll",
    descricao: "<p>Descrição: Gato de grande porte, conhecido por sua pelagem macia e personalidade dócil.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Birmanês",
    descricao: "<p>Descrição: Gato de pelagem longa e colorida, com olhos azuis e luvas brancas nas patas.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "British Shorthair",
    descricao: "<p>Descrição: Gato de pelagem curta e densa, com rosto redondo e expressivo.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},

//passáros
{
    titulo: "Calopsita",
    descricao: "<p>Descrição: Psitacídeo de pequeno porte, originário da Austrália. Conhecidos por sua plumagem colorida e capacidade de imitar sons. <p>Características: São aves sociáveis, inteligentes e brincalhonas. Necessitam de brinquedos para se distraírem. <p>Temperamento: Afetivo e dócil, mas podem ser teimosos. <p>Vida útil: Em média 15-20 anos.",
    link: "https://www.passarosbrasil.com.br/calopsita/"
},
];
