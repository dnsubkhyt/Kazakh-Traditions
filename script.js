document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('active');
  });

// Function to show traditions in the modal
function showTraditions(category) {
    const modal = document.getElementById('tradition-modal');
    const modalContentArea = document.getElementById('modal-content-area');
  
    // Clear the modal content area
    modalContentArea.innerHTML = '';
  
    // Example traditions data for each category
    const traditionsData = {
      1: 
      [ {title: "", description: "Дәстүрлік таным-түсініктен туындайтын қазақ халқының ұлттық ойындары - баланы іс-әрекетке, адамгершілік әдептерді игеруге, ақыл-ойын жетілдіруге, отансүйгіштікке баулуда, салауатты өмір сүруге тәрбиелеуде теңдесі жоқ құрал. Балалар ойындарында жас ерекшелік, физиологиялық дамуына үйлесімді қимыл-қозғалыс, тіл ұстарту, сөздік қорды молайту жағынан өте бай және педагогикалық заңдылықтар тапқырлықпен үйлесімді қиыстырылған. Ежелден «Адам ақылымен сымбатты» деп білген халқымыз тұрмыс-тіршілігіне байланысты туған ұлттық ойындарды бала тәрбиесіне лайықтап, шебер пайдалана білген. Балаларға арналған ойындарды тәрбие мәселесінен бөліп қарауға болмайды. Қазақ халқымен бірге жасап келе жатқан ұлттық ойындар бала тәрбиесінде негізінен екі жауапты қызмет атқарады: біріншіден, жаттығулар жасап, ұлт ойындарын ойнаған кезде дене дамуы жақсарса, екіншіден, ұлт ойындарының мазмұны ұлттық әдет-ғұрпымызды қастерлеуге талпындырады."},
        { title: "Алтыбақан", description: "Жастардың кешкілік бас қосып, ән айтып, домбыра тартып, қыздар-жігіттер болып айтысып, бір-бірімен әзілдесіп көңіл көтеретін ойынсауығы." },
        { title: "Ақшамшық", description: "Қазақ халқының ерте заманнан келе жатқан дәстүрлі ойыны. Оны кей жерлерде «сақина салу», «сақина тастау» деп те айтады." },
        { title: "Аударыспақ", description: "Қазақ, қырғыз халықтарының арасында кең тараған ойын. Атқа мінген екі жігіт жекпе-жекке шығып, бірін-бірі аттан аударып тастауға тырысады." },
        { title: "Ат сайысы", description: "Бұл спорттық ойын. Оның «ат омырауластыру», «аударыспақ», «жорғажарыс», «көкпар тарту», «теңге ілу», «қыз қуу», «қыз жарыс», «сайыс», т.б. түрлері бар. Олар үлкен тойларда ұйымдастырылады. Сайысқа түсетін аттар алдын ала жаратылады" },
        { title: "Көкпар", description: "қазақтың ұлттық спорты, ол ат үстінде ойнайды. Екі команда өзара күресіп, жабының басын тартып, қарсыластарының алаңына апаруға тырысады. Көкпар ойынның мақсаты — жабыны өз командасының алаңына салу. Бұл ойын физикалық күш пен шеберлікті талап етеді." },
        { title: "Тоғызқұмалақ", description: "Тоғызқұмалақ — қазақтың дәстүрлі ақыл-ой ойыны. Ойын екі адам арасында өтеді, әрқайсысының тоғыз қорабы мен құмалақтары болады. Мақсаты — қарсыластың құмалақтарын жинап, өз ұпайыңды арттыру. Бұл ойын логика мен стратегияны қажет етеді." },
          ]      
        ,
      2: [
        {title: "Кіндік шеше", description: "сәбидің кіндігін кесетін әйел, ол бала туғаннан кейінгі маңызды рөл атқарады. Кіндік шешенің міндеттері: жүкті әйелді күту, босануға көмектесу, баланың кіндігін кесу және оған қамқорлық көрсету. Кіндік шеше балаға қырқынан шыққанда киетін киім әкеліп, оның ер жеткенше қамқоршы болады. Халық арасында баланың мінезі кіндік шешесіне тартады деген сенім бар. Бала ер жеткенде кіндік шешесіне құрмет көрсетіп, оған сый-құрмет көрсетеді."}
      ],
      3: [
        {title: "Шілде қағу", description: "Жас босанған келіншекті енесі мұқият қадағалап, денсаулығын қорғауға тырысады. Оны суықтан сақтау үшін жылы киіндіріп, шомылдырмайды және суық су ішкізбейді. Қырық күн бойы денесіне күтім жасап, белін буып, шашын тас қылып өріп, денесінің қалпына келуін қамтамасыз етеді. Осы уақыт ішінде келіннің денсаулығын сақтап, оны жақсы жағдайда ұстауға ерекше көңіл бөлінеді."}

      ],
      4:[
        {title: "Тымаққа салу", description: "Егер бала күні жетпей туса, оны «шала туған» деп атайды. Мұндай балаларды ерекше күтіммен өсіреді: тымаққа салып, көзден таса жерде ұстайды, орнын жиі ауыстырып тұрады. Олар басқа балалардан ерекше күтімді қажет етіп, жиі-жиі тамақтандырылады."}

      ],
      5:[
        {title: "Сүйіндір", description: "Тұрмысқа шыққан қыз балалы болғанда, оған ең алдымен қуанып анасы келеді. Бұл — әрбір қазақ әйелі үшін міндет. Анасы қызына ақыл-кеңес беріп, баланың тәрбиесін, күтімін түсіндіреді. Сонымен қатар, құдақұдағиының қуанышына ортақтасып, балаға жасауын әкеледі. Бұл дәстүр «сүйіндір» деп аталып, анасының қызына арнайы келіп, оны құттықтауымен жалғасады."}

      ],
      6: [
        {title: "Бесікке салу", description: "«Кең жайлау жалғыз бесік жас балаға» деген сөзбен қазақ халқында бесіктің маңызы өте жоғары екені білдіріледі. Бесік — баланың ұйықтауына және таза болуына ыңғайлы болып жасалады. Бала бесікке салынатын кезде оны ауылдың өнегелі, сыйлы бәйбішесі салады. Бұл кезде бесікжырын айтып, баланы бөлеу — қазақтың дәстүрлі тәрбиесінің бір бөлігі болып саналады."}

      ],
      7: [
        {title: "Ат қою", description: "Балаға ат қою — қазақ халқында өте маңызды және салтанатты дәстүр. Әдетте ата-анасы баласына әдемі, атақты, құрметті адамдардың атын қояды және сол атқа лайықты болуын қалайды. Ат қою кезінде сәбидің туылған уақыты мен жағдайы да ескеріледі, мысалы, Наурызда — Наурызбай, ораза кезінде — Ораз, айтта — Айтбай, шөп шабу кезі — Шөптібай деп аталады. Сонымен қатар, қыздарға «Үлтуған», «Үлжан» сияқты аттар қойылып, ұлдар келеді деген үмітпен ат қойылады. Бұл дәстүр бүгінгі күнге дейін жалғасып, көптеген ата-аналар әйгілі адамдардың есімдерін балаларына қояды."}

      ],
      8:[
        {title: "Қырқынан шығару", description: "Қырық күн өткен соң, баланы әйелдер суға түсіріп, оның шашы мен тырнағын алады. Бұл рәсімді жасаған әйелдерге сый-құрмет көрсетіліп, рақмет айтылады. Одан кейін барлық жиналған адамдар дастарқанға шақырылып, мерекелік шара өтеді."}

      ],
      9: [
        {title: "Асырап алу", description: "Баласы жоқ ерлі-зайыптылар көбіне жақын туыстарының баласын асырап алады, бірақ бұл шешім бала мен оның ата-анасының келісімімен жүзеге асады. Жаңа ата-ана баласына ат қойып, оны елдің алдында таныстырып, оң қолына асықты жілік ұстатады. Осыдан кейін бала енді жаңа ата-анасының баласы ретінде жарияланады."}
      ],
      10: [
        {title: "Шілдехана", description: "«Шілдехана» — бала туғаннан кейін өтетін салтанатты шара. Бұл жиынға жастар көп жиналады, көлігі барлар сән-салтанатпен келеді. Жастар таң атқанша ән айтып, билеп, домбыра шертіп отырады. Шілдехана дастарқанын басқаратын әйелдер «қалжа» сойылып, омыртқасын мүжиді. Бұл дәстүр баланың мойнының тез бекіуі үшін жасалады. Сондай-ақ, қалжаның омыртқасынан ауыз тимеген әйелдер өкпелейді. Бала табуға құштар әйелдер бұл әрекетті ритуал ретінде қабылдайды."}
      ],
      11: [
        {title: "Тұсау кесу", description: "«Тусау кесер» — баланың алғашқы қадамдарын бастаған кезде жасалатын дәстүр. Бұл салт балаға келешекте сәттілік, ақ жол тілеу мақсатында өткізіледі. Ала-құла жіп балаға байланып, оны ауылдағы пысық әйел кеседі, бұл әрекет баланы жаман жолдан сақтап, дұрыс өмір сүре білуге баулуды білдіреді. Ала жіптің байлануы мен кесілуі арқылы қазақ баласына адалдық, өзгенің құқығын бұзбау, жаман ойларға жоламау керектігі үйретіледі."}
      ],
      12: [
        {title: "Сүндет тойы", description: "Сүндет тойы — ұл балалар үш жасқа толған соң өткізілетін дәстүр. Бұл салт ислам дінімен байланысты болып, адам денесінің тазалығына арналған. Баланы сүндетке отырғызу кезінде екі тәсіл қолданылады: кесу және шету. Кесу әдісі әдетте кіші балаларға, шету әдісі есейген балаларға жасалады. Сүндет тойы кезінде баланы сәндеп киіндіріп, арнайы «Сүндет атқа» мінгізіп, ауыл-аймақты аралатады. Бұл той — баланың мұсылман санатына қосылғанын білдіретін қуанышты іс-шара."}
      ],
      13: [
        {title: "Ашамайға мінгізу", description: "Ашамайға міну — қазақ баласының ер жетуінің алғашқы қадамы. Үш жасында ұл бала атқа мініп, ашамайға отырып, алғашқы қадамдарын жасайды. Ашамай — атқа мінудің қарапайым түрі, ағаштан жасалып, баланың аяғын байлап қояды. Баланың атқа мінген кезде ашамай тойы өткізіледі. Бұл тойдың салтанаты отбасылық жағдайға байланысты, байлар ірі қара сойып, кедейлер бүйрегі майы бар лағын сойып тойлайды. Ашамайға міну қазақ үшін ат жалын тарту, азаматтықтың бастамасы болып табылады. Бұл дәстүр баланы ерте өмірге бейімдейді, атқа мінуден кейін жауынгерлік, көшпелі өмірдің барлық тұстары басталады."}
      ],
      14: [
        {title: "Қыз баланың құлағын тесу", description: "Қыз бала екі-үш жасқа келгенде қуыршақ жасап, үйде ойнауға әуес бола бастайды. Осы кезде оған арнап қуаныштың бір сәті келіп, құлағын тесуге дайындық жасалады. Қызды қос етек көйлек, кестелі қамзол киіндіріп, құлағын тескенде ауыл әйелдері жиналады. Құлақ тесудің екі түрі бар: күміс инемен немесе тарымен тесу. Инемен тескенде, жылдамдықпен тесіп, жібек жіп немесе күміс сым өткізіледі. Тарымен тескенде тері мен шеміршек оңай тесіліп, ешқандай қан шықпайды. Құлақ тескеннен кейін жеңіл сырға тағылып, бұл қыз баланың өміріндегі маңызды әрі қуанышты сәт саналады."}
      ],
      15: [
        {title: "Көгентүп", description: "«Көгентүп» дәстүрі — қонаққа келген туысқандар немесе жақсы достарға құрмет көрсету үшін үй иелерінің олардың балаларына құлын, бұзау немесе қозы беруі. Бұл сыйлық алғаш есік ашқан балаға туыстық қатынасты таныту мақсатында жасалады."}
      ],
      16: [
        {title: "Аузына түкіру", description: "Қазақ халқы өздерінің әйгілі батырлары, ақындары, би-шешендерін жоғары бағалап, әр ата-ана баласының соларға ұқсағанын қалаған. Сондықтан олар баласының бойынан осы ұлы тұлғалардың жақсы қасиеттерін көру үшін оларға құрмет көрсетіп, баласын солардың жақсы қасиеттеріне баулыған."}
      ],
      17: [
        {title: "Тыйым", description: "Қазақ халқының тыйымдары өте бай және олардың мәні терең. Мысалы, тізе қүшақтап отыру дұрыс емес, себебі бұл адам болашақта ешкімді құшақтамайды деген белгі. Үй ішінде ысқыру, жер немесе бүйір таяну да тыйым салынады, өйткені бұл әрекеттер белгілі бір қайғылы жағдайларды білдіруі мүмкін. Табалдырықты басуға, пышақ немесе ит сыйлауға болмайды, себебі бұл жақын адамдар арасындағы түсініспеушіліктер мен жаулықты шақыруы мүмкін. Сонымен қатар, үлкендердің жолын кесу әдепсіздік деп саналады."}
      ],
      18: [
        {title: "Қозы жасы", description: "Қазақ халқы ұл баланы он жасқа келгенде «қозы жасына» жетті деп атап, оны қозы бағуға үйрететін. Бұл кезең еңбекке баулудың алғашқы қадамы болып табылады. Баланың қолына ақ таяқ ұстатып, қозы бағып үйренуі оның шынығуына көмектесетін. Қазақ үшін қозы баққан баланың еңбегі маңызды, өйткені ол ерте еңбекке араласып, еңбекқорлықты меңгереді. Кейбір халықтарда жасөспірімдер физикалық еңбектен аулақ болса, қазақ баласы ерте жастан еңбекке араласқан."}
      ],
      19: [
        {title: "Қой жасы", description: "Қазақ халқында он бес жастағы бала «қой жасына» жетеді деп саналады. Бұл кезеңде бала қой бағуды бастайды, яғни ол өзінің еңбек жолына кіріседі. Отау иесі деп саналатын жасқа келген бозбаланы қой бағу міндетіне үйрету әдетке айналған. Бұл кезде бала табиғаттың қиындығына төтеп беруге, тәуелсіздікті сезінуге және малды бағудың жауапкершілігін мойнына алуға дайын болады. Осылайша, қазақта «қой жасына» дейін жеткен баланың еңбекке бейімділігі мен тәуелсіздігі қалыптасады, ал одан әрі «жылқы жасына» өту үшін тек ең мықтылар мен мақсаттары айқындар ғана қадам жасайды."}
      ],
      20: [
        {title: "Жылқы жасы", description: "Қазақ халқында жиырма бес жас пен қырық жас аралығы «жылқы жасы» деп аталған. Бұл кезең адамның ең кемел шағы болып саналған, себебі осы уақытта ер адам жылқыны басқаруға, оны бағуға, оның ауыртпалықтарын көруге толық дайын болған. Аттың үстінде боранға, жауға, қасқырларға қарсы тұру, жылқыны кез келген қиындыққа қарамастан аман сақтау – тек осы жас аралығындағы адамдардың ғана қолынан келетін іс ретінде қарастырылған. Осы жастағы адамдардың еңбекке баулынуы мен шыңдалуы «жылқы жасы» кезеңінде жүзеге асқан, яғни бұл кезең жоғары деңгейдегі өмір мектебі болып табылған."}
      ],
      21: [
        {title: "Жеті ата", description: "Қазақ халқында жеті ата – туыстық қатынастың маңызды ұстыны. Бұл түсінік бойынша, жеті атаға дейінгі туыстар арасында үйленуге рұқсат етілмейді. Жеті атаға дейінгі туыстықты «қаны аралас» деп есептеп, ұрпақ арасындағы некені шектейді. Бұл дәстүр ұрпақтар арасындағы генетикалық байланыс пен ұрпақтар тазалығының сақталуына мән берген. Осылайша, қазақтар ұрпақтар арасындағы туыстықты сақтап, отбасылық шежірені бұзбай, халық арасында тектілік пен бірлікке ерекше көңіл бөлген."}
      ]

        
    };
  
    // If the category has traditions, display them
    if (traditionsData[category]) {
      traditionsData[category].forEach(tradition => {
        const traditionDiv = document.createElement('div');
        traditionDiv.classList.add('tradition');
        traditionDiv.innerHTML = `<h3>${tradition.title}</h3><p>${tradition.description}</p>`;
        modalContentArea.appendChild(traditionDiv);
      });
  
      // Display the modal
      modal.style.display = 'block';
    }
  }
  
  // Close the modal when "X" is clicked
  document.getElementById('close-modal').onclick = function () {
    document.getElementById('tradition-modal').style.display = 'none';
  }
  
  // Close the modal when clicking anywhere outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('tradition-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
