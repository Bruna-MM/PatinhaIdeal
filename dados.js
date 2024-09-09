//informações de banco de dados
let dados= [
    //gerais
    {
        titulo: "Cachorro",
        descricao: "<p>Descrição: Mamífero carnívoro, domesticado há milênios, conhecido por sua lealdade e companheirismo. <p>Características: Grande variedade de raças, tamanhos, pelagens e temperamentos. A expectativa de vida varia de acordo com a raça, geralmente entre 10 e 15 anos. <p>Cuidados: Necessitam de passeios regulares, alimentação balanceada, treinamento e cuidados veterinários. Doenças frequentes incluem displasia, problemas cardíacos e alergias. <p>Temperamento: Varia muito de acordo com a raça e a socialização. Podem ser desde calmos e dóceis até enérgicos e protetores. <p>Vida útil: Varia de acordo com a raça, mas em média vivem entre 10 e 15 anos. <p>Indicado para: Pessoas de todas as idades que buscam um companheiro fiel e ativo, ideal para famílias, crianças e pessoas que gostam de atividade física.",
        link: "https://www.purina.pt/encontrar-animal/racas-caes",
    },
    {
        titulo: "Gato",
        descricao: "<p>Descrição: Mamífero carnívoro, conhecido por sua independência e elegância. <p>Características: Necessitam de uma caixa de areia, brinquedos e carinho. A expectativa de vida é de 12 a 15 anos. <p>Cuidados: Exigem alimentação de qualidade, água fresca e visitas regulares ao veterinário. Doenças comuns incluem problemas renais e doenças dentárias. <p>Temperamento: Varia de acordo com a raça e a socialização, podendo ser independente ou sociável. <p>Vida útil: Em média 12-15 anos. <p>Indicado para: Pessoas que preferem animais independentes e com baixa necessidade de atenção constante. Ideal para apartamentos e quem tem rotina mais tranquila.",
        link: "https://www.worldcat.org/pt/oclc/45951126"
    },
    {
        titulo: "Cavalo",
        descricao: "<p>Descrição: Mamífero ungulado, domesticado há milênios, utilizado para diversas atividades. <p>Características: Necessitam de espaço para pastar, alimentação balanceada e cuidados veterinários regulares. A expectativa de vida varia entre 25 a 30 anos. <p>Cuidados: Exigem ferrageamento, escovação, alimentação rica em fibras e monitoramento de saúde. Problemas frequentes incluem cólicas e doenças respiratórias. <p>Temperamento: Varia de acordo com a raça e a doma, podendo ser calmo, enérgico ou nervoso. <p>Vida útil: Em média 25-30 anos. <p>Indicado para: Pessoas que dispõem de espaço adequado e têm experiência em cuidados e manejo de equinos.",
        link: "https://www.cbh.org.br/"
    },
    {
        titulo: "Cobra",
        descricao: "<p>Descrição: Réptil alongado e sem pernas, com grande variedade de tamanhos e cores. <p>Características: Necessitam de um terrário adequado com temperatura e umidade controladas. A alimentação varia de acordo com a espécie. Expectativa de vida pode ser de 10 a 20 anos ou mais, dependendo da espécie. <p>Cuidados: Exigem alimentação com presas vivas ou congeladas, monitoramento do terrário e cuidados veterinários especializados. <p>Temperamento: Varia muito entre as espécies, desde dóceis até agressivas. <p>Vida útil: Varia amplamente, dependendo da espécie. <p>Indicado para: Pessoas com interesse em répteis e que possuam tempo e recursos para manter um ambiente controlado.",
        link: "https://www.petlove.com.br/dicas/cobras-como-ter-uma-de-estimacao?gad_source=1&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLBH2jxhYVaSxnu2Ed3f6D7X5zc-VeRBNXaxyDqMHhZghYiOnlZ0O4aApXuEALw_wcB"
    },
    {
        titulo: "Pássaro",
        descricao: "<p>Descrição: Vertebrado de sangue quente, com penas e capacidade de voar. <p>Características: Necessitam de uma gaiola espaçosa com poleiros, brinquedos e uma dieta balanceada de sementes, frutas e verduras. A expectativa de vida varia entre 5 e 15 anos, dependendo da espécie. <p>Cuidados: Necessitam de limpeza regular da gaiola, água fresca e cuidados veterinários. Podem ser propensos a doenças respiratórias. <p>Temperamento: Varia muito entre as espécies, desde calmos até muito ativos. <p>Vida útil: Varia amplamente, dependendo da espécie. <p>Indicado para: Pessoas que buscam animais de companhia que exigem cuidados moderados e gostam de observar o comportamento dos pássaros.",
        link: "https://www.passarosbrasil.com.br/"
    },
    {
        titulo: "Hamster",
        descricao: "<p>Descrição: Roedor pequeno e noturno, conhecido por sua atividade e curiosidade. <p>Características: Necessitam de uma roda de exercício, esconderijos e uma dieta rica em sementes e grãos. A expectativa de vida é curta, de 2 a 3 anos. <p>Cuidados: Exigem limpeza regular da gaiola, alimentação balanceada e cuidados com dentes em crescimento. Doenças comuns incluem infecções respiratórias e problemas dentários. <p>Temperamento: Solitário e territorial, mas pode ser dócil com seus donos. <p>Vida útil: Em média 2-3 anos. <p>Indicado para: Pessoas que buscam um pet de baixo custo de manutenção e espaço, ideal para crianças com supervisão de adultos.",
        link: "https://www.petz.com.br/blog/cuidados-com-hamster/"
    },
    {
        titulo: "Peixe",
        descricao: "<p>Descrição: Vertebrado aquático, com grande variedade de formas, cores e tamanhos. <p>Características: Necessitam de um aquário com filtragem adequada, temperatura controlada e oxigenação. A expectativa de vida varia de 1 a 10 anos ou mais, dependendo da espécie. <p>Cuidados: Exigem limpeza regular do aquário, monitoramento da qualidade da água e alimentação específica. Doenças comuns incluem ictiofitiríase e problemas de água. <p>Temperamento: Varia muito entre as espécies, desde pacíficos até agressivos. <p>Vida útil: Varia amplamente, dependendo da espécie. <p>Indicado para: Pessoas que desejam um pet de baixa manutenção e que tenham interesse em aquarismo.",
        link: "https://www.petz.com.br/blog/aquario/"
    },
    {
        titulo: "Tartaruga",
        descricao: "<p>Descrição: Réptil de casco rígido, conhecido por sua longevidade. Lenta, herbívora e solitária. <p>Características: Necessitam de um terrário adequado com lâmpada de UVB, substrato adequado, água para banho e uma dieta rica em vegetais. <p>Cuidados: Exigem alimentação saudável e variada, monitoramento da temperatura do ambiente e cuidados veterinários. Problemas frequentes incluem doenças ósseas metabólicas. <p>Temperamento: Calma e tranquila. <p>Vida útil: Podem viver várias décadas, dependendo da espécie. <p>Indicado para: Pessoas que buscam um animal de longa duração e que tenham paciência para cuidar de um pet com comportamento solitário.",
        link: "https://www.petz.com.br/blog/tartarugas/"
    },
    {
        titulo: "Porquinho da Índia",
        descricao: "<p>Descrição: Roedor sociável e curioso, popular como animal de estimação. Pelagem macia e densa, em diversas cores e padrões. São animais diurnos e muito ativos. <p>Características: Necessitam de uma gaiola espaçosa com esconderijos, objetos para roer e uma dieta rica em feno, verduras e legumes. A expectativa de vida é de 5 a 7 anos. <p>Cuidados: Exigem limpeza regular da gaiola, alimentação balanceada e monitoramento da saúde. Problemas comuns incluem problemas dentários e infecções respiratórias. <p>Temperamento: Geralmente dócil e curioso, mas pode morder se se sentir ameaçado. <p>Vida útil: Em média 5-7 anos, mas podem viver até 8 anos. <p>Indicado para: Famílias com crianças e pessoas que buscam um pet sociável e interativo, mas que necessite de espaço moderado.",
        link: "https://www.petlove.com.br/dicas/como-cuidar-bem-de-um-porquinho-da-india/amp?gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfJcrHNTY9t7KFGboq3avqLLVTib4Rdx5sgy3kAVgnQaYVPsfnPxCGxoCWd4QAvD_BwE"
    },
    

//cachorros

{
    titulo: "Labrador Retriever",
    descricao: "<p>Descrição: Raça de porte médio a grande, originária do Canadá. Conhecidos por sua lealdade, inteligência e amor pela água. Pelagem curta e densa, em cores como preto, amarelo e chocolate. <p>Características: São excelentes cães de família, amigáveis e pacientes com crianças. Necessitam de atividades físicas regulares. <p>Temperamento: Alegre, sociável e dócil. <p>Expectativa de vida: Em média 10-12 anos. <p>Cuidados: Exige exercícios diários e atenção à alimentação para evitar sobrepeso. <p>Doenças frequentes: Displasia coxofemoral e cotovelar, além de problemas oculares. <p>Indicado para: Famílias ativas com crianças e pessoas que gostam de atividades ao ar livre.",
    link: "https://www.cbkc.org/racas/labrador-retriever/"
},
{
    titulo: "Shih Tzu (Shitzu)",
    descricao: "<p>Descrição: Raça de companhia originária da China, conhecida por sua pelagem longa e sedosa. É um cão alegre, companheiro e adaptável a diferentes ambientes.</p><p>Expectativa de vida: Em média 10-16 anos. <p>Cuidados: Necessita de escovação diária e higiene ocular regular. <p>Doenças frequentes: Problemas respiratórios e oculares. <p>Indicado para: Famílias e pessoas que buscam um cão de companhia afetuoso e tranquilo.",
    link: "https://www.cbkc.org.br/cbkc/racas/shih-tzu/"
},
{
    titulo: "Maltês(Maltes)",
    descricao: "<p>Descrição: Pequeno cão de companhia, conhecido por sua pelagem branca e longa, que requer cuidados especiais. É um cão alegre, inteligente e leal.</p><p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: A pelagem precisa de escovação diária e banhos frequentes. <p>Doenças frequentes: Problemas dentários e lacrimejamento excessivo. <p>Indicado para: Pessoas que desejam um cão de pequeno porte e com personalidade afetuosa.",
    link: "https://www.cbkc.org.br/cbkc/racas/maltes/"
},
{
    titulo: "Bulldog Inglês",
    descricao: "<p>Descrição: Raça de porte médio, originária da Inglaterra. Conhecidos por sua aparência musculosa e rosto achatado. <p>Características: São cães tranquilos e leais, mas podem ser teimosos. <p>Temperamento: Calmo, gentil e paciente. <p>Expectativa de vida: Em média 8-10 anos. <p>Cuidados: Necessita de cuidados especiais com a pele e a higiene das dobras faciais. <p>Doenças frequentes: Problemas respiratórios, displasia e obesidade. <p>Indicado para: Pessoas que buscam um cão calmo e de companhia, ideal para ambientes internos.",
    link: "https://www.cbkc.org/racas/bulldog-ingles/"
},
{
    titulo: "Husky Siberiano",
    descricao: "<p>Descrição: Raça de porte médio a grande, originária da Sibéria. Conhecidos por seus olhos azuis e pelagem espessa. <p>Características: São cães de trabalho, utilizados para puxar trenós. Necessitam de muito exercício físico. <p>Temperamento: Energético, independente e inteligente. <p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: Requer exercício diário intenso e escovação regular da pelagem. <p>Doenças frequentes: Displasia e problemas oculares. <p>Indicado para: Pessoas ativas e que moram em regiões de clima ameno ou frio.",
    link: "https://www.cbkc.org/racas/husky-siberiano/"
},
{
    titulo: "Chihuahua",
    descricao: "<p>Descrição: A menor raça canina reconhecida, originária do México. Conhecidos por sua personalidade forte e latido alto. <p>Características: São cães companheiros e leais, mas podem ser um pouco ciumentos. <p>Temperamento: Valente, alerta e curioso. <p>Expectativa de vida: Em média 15-18 anos. <p>Cuidados: Requer atenção especial com o frio e a saúde dentária. <p>Doenças frequentes: Problemas dentários e hipoglicemia. <p>Indicado para: Pessoas que desejam um cão pequeno e companheiro, ideal para ambientes internos.",
    link: "https://www.cbkc.org/racas/chihuahua/"
},
{
    titulo: "Border Collie",
    descricao: "<p>Descrição: Raça de pastoreio originária da Escócia. Conhecidos por sua inteligência excepcional e energia inesgotável. <p>Características: Pelagem dupla, olhos expressivos e corpo ágil. <p>Temperamento: Ágil, inteligente e obediente. Necessita de atividades físicas e mentais constantes. <p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: Requer exercícios diários intensos e estimulação mental. <p>Doenças frequentes: Displasia coxofemoral e problemas oculares. <p>Indicado para: Pessoas ativas e que possam dedicar tempo para atividades e treinamento.",
    link: "https://www.cbkc.org/racas/border-collie/"
},
{
    titulo: "Poodle",
    descricao: "<p>Descrição: Raça de companhia originária da Alemanha. Conhecidos por sua pelagem encaracolada e inteligência. Existem três tamanhos: padrão, miniatura e toy. <p>Características: Pelagem hipoalergênica e fácil de cuidar. <p>Temperamento: Inteligente, ativo e sociável. <p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: A pelagem requer tosa frequente. <p>Doenças frequentes: Problemas dentários e displasia coxofemoral. <p>Indicado para: Pessoas alérgicas e que desejam um cão ativo e inteligente.",
    link: "https://www.cbkc.org/racas/poodle/"
},
{
    titulo: "Schnauzer",
    descricao: "<p>Descrição: Raça de origem alemã, conhecida por sua pelagem áspera e barba característica. Existem três variedades: miniatura, standard e gigante. São cães inteligentes, leais e versáteis, com um temperamento alerta e enérgico.</p><p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: A pelagem precisa de manutenção regular e escovação. <p>Doenças frequentes: Problemas renais e pancreáticos. <p>Indicado para: Famílias ativas e pessoas que desejam um cão de guarda e companhia.",
    link: "https://www.cbkc.org.br/racas/schnauzer/"
},
{
    titulo: "Beagle",
    descricao: "<p>Descrição: Raça de caça originária da Inglaterra, conhecida por seu olfato apurado e personalidade alegre. São cães amigáveis, sociáveis e curiosos.</p><p>Expectativa de vida: Em média 12-15 anos. <p>Cuidados: Necessita de exercícios diários e controle da dieta para evitar obesidade. <p>Doenças frequentes: Problemas de pele e obesidade. <p>Indicado para: Famílias ativas que gostam de passear e brincar.",
    link: "https://www.cbkc.org.br/racas/beagle/"
},
{
    titulo: "Dachshund (Salsicha)",
    descricao: "<p>Descrição: Raça de cão de caça com corpo alongado e pernas curtas, originária da Alemanha. Conhecida por sua personalidade forte e lealdade.</p><p>Características: Três variedades de tamanho (padrão, miniatura e coelho), pelagem curta, longa ou dura. Orelhas grandes e caídas, focinho alongado e olhos expressivos.</p><p>Temperamento: Independentes, teimosos e com um alto instinto de caça. São leais aos seus donos e podem ser protetores.</p><p>Cuidados: Necessitam de cuidados com a coluna devido à sua conformação física. A obesidade é um problema comum, por isso a alimentação deve ser controlada. A socialização desde cedo é fundamental. <p>Expectativa de vida: Em média 12-16 anos. <p>Doenças frequentes: Problemas de coluna e obesidade. <p>Indicado para: Pessoas que buscam um cão pequeno, leal e que se adapta bem a apartamentos.",
    link: "https://www.cbkc.org.br/racas/dachshund/"
},

//fazenda
{
    titulo: "Ovelha Merino",
    descricao: "<p>Descrição: Raça ovina conhecida por sua lã fina e de alta qualidade, amplamente utilizada na indústria têxtil.</p> <p>Características: Lã macia e com alto valor comercial, considerada uma das melhores do mundo. O animal é adaptado a climas frios e montanhosos.</p> <p>Cuidados: Exige tosquia regular para manter a qualidade da lã e evitar doenças. Alimentação baseada em pasto, com suplementação durante o inverno.</p> <p>Temperamento: Geralmente dóceis e de fácil manejo.</p> <p>Vida útil: Cerca de 10 a 12 anos.</p> <p>Indicado para: Criadores interessados na produção de lã de alta qualidade e manejo em climas frios.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/ovinocultura"
},
{
    titulo: "Vaca Jersey",
    descricao: "<p>Descrição: Raça bovina leiteira conhecida por seu leite rico em gordura e proteína, ideal para a produção de queijos.</p> <p>Características: Animais de pequeno porte com alta eficiência leiteira. O leite produzido tem um teor de gordura superior a 5%, sendo excelente para produtos lácteos como manteiga e queijo.</p> <p>Cuidados: Necessitam de pasto de boa qualidade, suplementação mineral e manejo sanitário adequado para garantir a produção contínua de leite.</p> <p>Temperamento: Geralmente dóceis e de fácil manejo, adaptam-se bem a pequenas propriedades.</p> <p>Vida útil: Cerca de 15 a 20 anos.</p> <p>Indicado para: Pequenos e médios produtores de leite que buscam alto rendimento e qualidade do leite para fabricação de derivados.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/bovinocultura-de-leite"
},
{
    titulo: "Porco Berkshire",
    descricao: "<p>Descrição: Raça suína conhecida por sua carne marmorizada e saborosa, considerada uma das melhores para consumo.</p> <p>Características: Animal de porte médio com carne muito valorizada no mercado gourmet. A carne apresenta alta porcentagem de marmoreio, conferindo sabor e maciez superiores.</p> <p>Cuidados: Exigem alimentação balanceada e espaço adequado para criação. A saúde deve ser monitorada para evitar doenças comuns em suínos.</p> <p>Temperamento: Geralmente dóceis e de fácil manejo, adaptam-se bem a sistemas de produção ao ar livre.</p> <p>Vida útil: Cerca de 8 a 10 anos.</p> <p>Indicado para: Produtores que buscam carne de alta qualidade para atender ao mercado gourmet.</p>",
    link: "https://www.embrapa.br/busca-de-publicacoes/-/asset_publisher/C089L2S10-adc1-45cf-a7e3-b08a8f6cd09/content/suinocultura"
},
{
    titulo: "Cabra Saanen",
    descricao: "<p>Descrição: Raça caprina leiteira de origem suíça, conhecida pela alta produção de leite de qualidade.</p> <p>Características: Produz leite com teor de gordura entre 3% e 4%, excelente para derivados como queijos e iogurtes. Animal de pelagem branca e de porte médio.</p> <p>Cuidados: Exigem alimentação rica em fibras, com suplementação proteica para manter a produtividade. Necessitam de ambiente seco e arejado.</p> <p>Temperamento: São dóceis e de fácil manejo, tornando-se ideais para pequenos criadores.</p> <p>Vida útil: Cerca de 8 a 12 anos.</p> <p>Indicado para: Criadores voltados para a produção de leite caprino e pequenos produtores interessados em derivados lácteos de cabra.</p>",
    link: "https://www.embrapa.br/caprinos-e-ovinos"
},
{
    titulo: "Galinha Caipira",
    descricao: "<p>Descrição: Ave de criação tradicional no Brasil, conhecida pela rusticidade e produção de ovos e carne de alta qualidade.</p> <p>Características: Produz ovos com casca marrom e carne mais saborosa em comparação às galinhas comerciais. Adaptam-se bem a sistemas de criação ao ar livre.</p> <p>Cuidados: Necessitam de alimentação variada, incluindo grãos, verduras e insetos. Exigem ambiente com espaço para ciscar e proteção contra predadores.</p> <p>Temperamento: São aves rústicas e independentes, mas podem ser dóceis com manejo adequado.</p> <p>Vida útil: Cerca de 5 a 7 anos.</p> <p>Indicado para: Pequenos agricultores ou pessoas que buscam produção orgânica e sustentável de ovos e carne.</p>",
    link: "https://www.embrapa.br/avicultura"
},
{
    titulo: "Cavalo Mangalarga Marchador",
    descricao: "<p>Descrição: Raça equina brasileira, conhecida por sua marcha confortável e agilidade, sendo muito utilizada para cavalgadas e esportes.</p> <p>Características: Porte médio, pelagem variada e marcha natural, tornando-o excelente para longas cavalgadas. Possui temperamento nobre e disposição para o trabalho.</p> <p>Cuidados: Exigem alimentação balanceada com pasto de qualidade, além de cuidados com os cascos e exercícios regulares.</p> <p>Temperamento: Dócil, inteligente e resistente. São fáceis de adestrar e possuem boa convivência com humanos.</p> <p>Vida útil: Cerca de 25 a 30 anos.</p> <p>Indicado para: Criadores que buscam animais para cavalgadas e esportes equestres, além de propriedades rurais que necessitam de cavalos de trabalho.</p>",
    link: "https://www.abccmm.org.br/mangalarga-marchador/"
},
{
    titulo: "Pato Pekin",
    descricao: "<p>Descrição: Raça de pato de origem chinesa, criada principalmente para a produção de carne e ovos.</p> <p>Características: Produz carne tenra e de sabor suave. São de porte médio e de plumagem branca. Têm alta capacidade de produção de ovos.</p> <p>Cuidados: Necessitam de alimentação variada, incluindo grãos, insetos e vegetais. Exigem ambiente com água para nadar e refrescar-se.</p> <p>Temperamento: São aves dóceis e fáceis de manejar, mas podem ser territorialistas com outras espécies.</p> <p>Vida útil: Cerca de 8 a 12 anos.</p> <p>Indicado para: Pequenos e médios produtores interessados na produção de carne e ovos de pato.</p>",
    link: "https://www.embrapa.br/avicultura"
},
{
    titulo: "Coelho Nova Zelândia",
    descricao: "<p>Descrição: Raça de coelho utilizada principalmente para a produção de carne e pele, conhecida por seu rápido crescimento e rusticidade.</p> <p>Características: Animais de porte médio, com pelagem branca e carne de sabor suave e pouco gordurosa.</p> <p>Cuidados: Exigem gaiolas limpas e secas, além de uma dieta balanceada composta de feno, ração e água fresca. O ambiente deve ser arejado e protegido de temperaturas extremas.</p> <p>Temperamento: Geralmente dóceis e fáceis de manusear, o que facilita o manejo em criações comerciais.</p> <p>Vida útil: Cerca de 5 a 8 anos.</p> <p>Indicado para: Criadores voltados para a produção de carne de coelho e pequenos agricultores que buscam diversificar sua produção.</p>",
    link: "https://www.embrapa.br/cunicultura"
},


//peixes
{
    titulo: "Betta",
    descricao: "<p>Descrição: Peixe de briga siamês, conhecido por suas cores vibrantes e barbatanas exuberantes.</p> <p>Características: Territorial e agressivo, especialmente com outros bettas machos. Exige aquário individual e sem correnteza forte.</p> <p>Cuidados: Necessita de um aquário com no mínimo 10 litros, temperatura entre 24°C e 28°C e pH levemente ácido.</p> <p>Temperamento: Agressivo com outros machos da mesma espécie, mas pacífico com outras espécies não territoriais.</p> <p>Vida útil: Em média 2 a 4 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Peixe Dourado",
    descricao: "<p>Descrição: Um dos peixes de aquário mais populares, conhecido por sua variedade de cores e formas.</p> <p>Características: Pode crescer bastante, sendo necessário um aquário grande e bem filtrado. Popular entre iniciantes, mas exige cuidados específicos.</p> <p>Cuidados: Requer um aquário de pelo menos 50 litros por peixe, com temperatura entre 18°C e 24°C.</p> <p>Temperamento: Pacífico e social, pode viver em grupos com outros peixes pacíficos.</p> <p>Vida útil: Pode viver até 10 a 20 anos com os cuidados adequados.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Tetra Neon",
    descricao: "<p>Descrição: Peixe pequeno e colorido, ideal para aquários comunitários.</p> <p>Características: Apresenta uma faixa neon azul e vermelha, sendo muito ativo e sociável em grupos.</p> <p>Cuidados: Necessita de um aquário de pelo menos 40 litros, com temperatura entre 22°C e 26°C, e deve ser mantido em cardumes de no mínimo seis peixes.</p> <p>Temperamento: Pacífico e ideal para aquários comunitários com peixes pequenos e tranquilos.</p> <p>Vida útil: Em média 3 a 5 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Guppy",
    descricao: "<p>Descrição: Peixe pequeno e vivíparo, fácil de cuidar e se reproduzir.</p> <p>Características: Muito popular entre iniciantes, apresenta grande variedade de cores e padrões nas barbatanas.</p> <p>Cuidados: Necessita de aquário com temperatura entre 22°C e 28°C, e deve ser mantido em grupos de pelo menos três indivíduos.</p> <p>Temperamento: Pacífico e sociável, pode ser mantido em aquários comunitários com outras espécies tranquilas.</p> <p>Vida útil: Em média 2 a 3 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/tipos-de-peixes-de-aquario/"
},
{
    titulo: "Peixe Palhaço",
    descricao: "<p>Descrição: Peixe conhecido por sua relação simbiótica com anêmonas.</p> <p>Características: Popular por suas cores laranja e branco, e por ser o personagem do filme 'Procurando Nemo'.</p> <p>Cuidados: Requer aquário marinho de pelo menos 100 litros, com filtragem adequada e compatível com anêmonas.</p> <p>Temperamento: Pacífico, pode ser mantido em aquários comunitários marinhos.</p> <p>Vida útil: Em média 6 a 10 anos.</p>",
    link: "https://www.aquariomania.com.br/peixe-palhaco/"
},
{
    titulo: "Tang",
    descricao: "<p>Descrição: Peixe cirurgião, conhecido por suas barbatanas afiadas.</p> <p>Características: Possui corpo achatado e cores vibrantes, como o azul e o amarelo. Exige aquário grande devido ao seu tamanho e comportamento ativo.</p> <p>Cuidados: Necessita de aquário marinho com no mínimo 200 litros, boa filtragem e muito espaço para nadar.</p> <p>Temperamento: Geralmente pacífico, mas pode se tornar territorial com outros peixes cirurgiões.</p> <p>Vida útil: Em média 8 a 10 anos.</p>",
    link: "https://www.aquariomania.com.br/peixe-tang/"
},

{
    titulo: "Acará Bandeira",
    descricao: "<p>Descrição: Peixe de água doce, conhecido por suas barbatanas longas e elegantes, além de seu comportamento tranquilo. Ideal para aquários comunitários.</p> <p>Características: Suas cores variam entre prateado, preto e listrado. Exigem aquários bem plantados e com espaço para nadar.</p> <p>Cuidados: Precisam de aquários de pelo menos 100 litros, com temperatura entre 24°C e 28°C e pH levemente ácido.</p> <p>Temperamento: Geralmente pacíficos, mas podem ser agressivos durante a época de reprodução.</p> <p>Vida útil: Em média 8 a 10 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/como-cuidar-do-acara-bandeira/"
},
{
    titulo: "Disco",
    descricao: "<p>Descrição: Peixe de água doce, famoso por sua forma circular e cores vibrantes, sendo um dos peixes mais apreciados por aquaristas experientes.</p> <p>Características: Apresenta uma grande variedade de cores, como azul, vermelho e verde. Exige aquários grandes e bem filtrados.</p> <p>Cuidados: Necessitam de aquários de no mínimo 200 litros, com temperatura entre 27°C e 30°C e pH entre 6,0 e 6,5.</p> <p>Temperamento: São peixes pacíficos, mas podem ser tímidos, exigindo um ambiente calmo.</p> <p>Vida útil: Em média 10 a 15 anos.</p>",
    link: "https://www.aquariomania.com.br/peixe-disco/"
},
{
    titulo: "Molinésia",
    descricao: "<p>Descrição: Peixe de água doce, resistente e fácil de cuidar, ideal para iniciantes. Conhecido por sua coloração variada, que inclui preto, branco e dourado.</p> <p>Características: Vivíparo e de tamanho pequeno a médio, adapta-se bem a aquários comunitários.</p> <p>Cuidados: Necessitam de aquários com temperatura entre 24°C e 28°C, e preferem água levemente salinizada.</p> <p>Temperamento: São peixes pacíficos, que convivem bem com outras espécies.</p> <p>Vida útil: Em média 3 a 5 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/como-cuidar-da-molinesia/"
},
{
    titulo: "Oscar",
    descricao: "<p>Descrição: Peixe de grande porte, conhecido por seu comportamento agressivo e territorial. Ideal para aquaristas experientes que buscam espécies robustas.</p> <p>Características: Apresenta coloração variada, com padrões em preto, vermelho e laranja. Cresce rapidamente, podendo atingir até 35 cm.</p> <p>Cuidados: Exige aquários grandes, de pelo menos 200 litros, com temperatura entre 24°C e 28°C.</p> <p>Temperamento: Agressivo e territorial, deve ser mantido com peixes de tamanho similar.</p> <p>Vida útil: Em média 10 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/como-cuidar-do-oscar/"
},
{
    titulo: "Platy",
    descricao: "<p>Descrição: Peixe pequeno e colorido, muito popular entre iniciantes pela facilidade de manejo e reprodução. Conhecido por sua vivacidade e variedade de cores.</p> <p>Características: Vivíparo, de tamanho pequeno, ideal para aquários comunitários. Apresenta cores como vermelho, laranja e azul.</p> <p>Cuidados: Exige aquários com temperatura entre 22°C e 26°C, com pH levemente alcalino.</p> <p>Temperamento: Pacíficos, convivem bem com outras espécies pequenas.</p> <p>Vida útil: Em média 2 a 3 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/peixes/como-cuidar-do-platy/"
}
,

// gatos
{
    titulo: "Siamês",
    descricao: "<p>Descrição: Gato conhecido por sua pelagem curta e brilhante, olhos azuis e miados característicos.</p> <p>Características: Corpo esguio, pelagem clara com pontos mais escuros no rosto, orelhas, patas e cauda.</p> <p>Cuidados: Necessita de interação diária e estímulos mentais.</p> <p>Temperamento: Sociável, vocal e apegado ao dono.</p> <p>Vida útil: Em média 15 a 20 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Persa",
    descricao: "<p>Descrição: Gato de pelo longo e sedoso, com focinho achatado e olhos grandes e expressivos.</p> <p>Características: Pelagem densa e macia, exige escovação diária para evitar nós.</p> <p>Cuidados: Necessita de cuidados regulares com a higiene ocular e manutenção do pelo.</p> <p>Temperamento: Calmo e afetuoso, prefere ambientes tranquilos.</p> <p>Vida útil: Em média 12 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Maine Coon",
    descricao: "<p>Descrição: Uma das maiores raças de gatos domésticos, com pelo longo e espesso, originária dos EUA.</p> <p>Características: Corpo robusto, pelagem resistente ao frio e cauda longa e espessa.</p> <p>Cuidados: Escovação regular para manter o pelo saudável.</p> <p>Temperamento: Sociável, dócil e bom com crianças.</p> <p>Vida útil: Em média 12 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Bengal",
    descricao: "<p>Descrição: Gato com aparência selvagem e pelagem manchada que lembra leopardos.</p> <p>Características: Ativo e atlético, adora brincar e explorar.</p> <p>Cuidados: Necessita de espaço para se exercitar e de estímulos mentais.</p> <p>Temperamento: Energético, curioso e afetuoso com a família.</p> <p>Vida útil: Em média 12 a 16 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Sphynx",
    descricao: "<p>Descrição: Gato sem pelo, conhecido por sua pele rugosa e quente.</p> <p>Características: Pele macia e quente ao toque, exige cuidados especiais para a higiene da pele.</p> <p>Cuidados: Banhos regulares para remover oleosidade acumulada na pele.</p> <p>Temperamento: Afetuoso, sociável e adora estar perto de pessoas.</p> <p>Vida útil: Em média 8 a 14 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Abissínio",
    descricao: "<p>Descrição: Uma das raças mais antigas, com pelagem curta e tigrada.</p> <p>Características: Corpo esguio, ágil e ativo, com pelagem que brilha ao sol.</p> <p>Cuidados: Escovação ocasional para remover pelos mortos.</p> <p>Temperamento: Inteligente, curioso e bastante ativo.</p> <p>Vida útil: Em média 9 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Scottish Fold",
    descricao: "<p>Descrição: Gato famoso por suas orelhas dobradas para frente.</p> <p>Características: Corpo compacto e pelagem curta ou longa, orelhas dobradas são sua marca registrada.</p> <p>Cuidados: Atenção especial às articulações devido à mutação que causa as orelhas dobradas.</p> <p>Temperamento: Afetuoso, tranquilo e apegado à família.</p> <p>Vida útil: Em média 11 a 14 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Ragdoll",
    descricao: "<p>Descrição: Gato de grande porte, com pelagem macia e personalidade dócil.</p> <p>Características: Pelagem semilonga, olhos azuis e corpo musculoso.</p> <p>Cuidados: Escovação semanal para manter o pelo saudável.</p> <p>Temperamento: Dócil, relaxado e afetuoso, ideal para famílias com crianças.</p> <p>Vida útil: Em média 12 a 17 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "Birmanês",
    descricao: "<p>Descrição: Gato de pelagem longa e colorida, com olhos azuis e luvas brancas nas patas.</p> <p>Características: Corpo musculoso, pelagem macia e sedosa, com extremidades escuras e luvas brancas.</p> <p>Cuidados: Escovação semanal para evitar emaranhados no pelo.</p> <p>Temperamento: Carinhoso, afetuoso e sociável.</p> <p>Vida útil: Em média 12 a 16 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},
{
    titulo: "British Shorthair",
    descricao: "<p>Descrição: Gato de pelagem curta e densa, com rosto redondo e olhos grandes e expressivos.</p> <p>Características: Corpo compacto e robusto, com uma pelagem grossa e densa.</p> <p>Cuidados: Escovação semanal para remover pelos mortos.</p> <p>Temperamento: Calmo, afetuoso e independente.</p> <p>Vida útil: Em média 12 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/gatos/racas-de-gatos/"
},

//passáros
{
    titulo: "Calopsita",
    descricao: "<p>Descrição: Psitacídeo de pequeno porte, originário da Austrália. Conhecidos por sua plumagem colorida e capacidade de imitar sons. <p>Características: São aves sociáveis, inteligentes e brincalhonas. Necessitam de brinquedos para se distraírem. <p>Temperamento: Afetivo e dócil, mas podem ser teimosos. <p>Vida útil: Em média 15-20 anos.",
    link: "https://www.passarosbrasil.com.br/calopsita/"
},
{
    titulo: "Calopsita",
    descricao: "<p>Descrição: Psitacídeo de pequeno porte, originário da Austrália. Conhecida por sua plumagem colorida e capacidade de imitar sons.</p> <p>Características: São aves sociáveis, inteligentes e brincalhonas. Necessitam de brinquedos para se distrair e interações diárias com seus donos.</p> <p>Cuidados: Requerem uma gaiola espaçosa, brinquedos, poleiros e uma dieta variada com sementes, frutas e verduras.</p> <p>Temperamento: Afetiva, dócil, mas pode ser teimosa. Cria laços fortes com os donos.</p> <p>Vida útil: Em média 15 a 20 anos.</p>",
    link: "https://www.passarosbrasil.com.br/calopsita/"
},
{
    titulo: "Papagaio-do-congo",
    descricao: "<p>Descrição: Ave de grande porte, conhecida por sua inteligência e habilidade para imitar palavras e sons.</p> <p>Características: Plumagem cinza com cauda vermelha. Requer muita interação e estímulo mental.</p> <p>Cuidados: Necessita de gaiola grande, brinquedos, alimentação variada e bastante atenção.</p> <p>Temperamento: Sociável e afetuoso, mas pode se tornar agressivo se não for bem socializado.</p> <p>Vida útil: Em média 40 a 60 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/aves/racas-de-papagaios/"
},
{
    titulo: "Canário Belga",
    descricao: "<p>Descrição: Pequena ave conhecida por seu canto melodioso e alegre.</p> <p>Características: Plumagem em tons de amarelo, verde ou laranja. Os machos são os principais cantores.</p> <p>Cuidados: Necessita de uma gaiola com espaço para voar e uma dieta equilibrada à base de sementes e frutas.</p> <p>Temperamento: Aves tranquilas, mas gostam de voar e explorar o ambiente.</p> <p>Vida útil: Em média 10 a 12 anos.</p>",
    link: "https://www.passarosbrasil.com.br/canario-belga/"
},
{
    titulo: "Periquito Australiano",
    descricao: "<p>Descrição: Ave pequena e colorida, muito popular como animal de estimação por sua sociabilidade.</p> <p>Características: Plumagem variada com combinações de verde, azul, amarelo e branco. São ágeis e adoram brincar.</p> <p>Cuidados: Requerem brinquedos, poleiros e uma dieta rica em sementes, frutas e verduras.</p> <p>Temperamento: Sociável e amigável, ideal para quem busca uma ave interativa.</p> <p>Vida útil: Em média 10 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/aves/racas-de-periquitos/"
},
{
    titulo: "Agapornis",
    descricao: "<p>Descrição: Conhecidos como pássaros do amor, são pequenos psitacídeos com plumagem colorida.</p> <p>Características: São aves muito sociáveis e vivem melhor em pares. Gostam de brincar e interagir com seus donos.</p> <p>Cuidados: Necessitam de uma gaiola espaçosa, brinquedos e uma alimentação balanceada.</p> <p>Temperamento: Carinhosos e brincalhões, gostam de companhia e podem ser um pouco ciumentos.</p> <p>Vida útil: Em média 10 a 15 anos.</p>",
    link: "https://www.petz.com.br/blog/especies/aves/racas-de-agapornis/"
},
{
    titulo: "Pardal",
    descricao: "<p>Descrição: Pequena ave encontrada em áreas urbanas e rurais, conhecida por sua capacidade de adaptação a diferentes ambientes.</p> <p>Características: Plumagem marrom e cinza, com padrões simples. São aves resistentes e adaptáveis.</p> <p>Cuidados: Não são comuns como animais de estimação, mas se criados em cativeiro necessitam de espaço e uma alimentação equilibrada.</p> <p>Temperamento: Independente e curioso, gosta de viver em bandos.</p> <p>Vida útil: Em média 3 a 5 anos na natureza, podendo viver mais tempo em cativeiro.</p>",
    link: "https://www.petz.com.br/blog/especies/aves/"
}

];
