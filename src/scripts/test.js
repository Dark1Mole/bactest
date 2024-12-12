document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            id: 1,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 1. </span>Numiți lupta din 1595 precizată în sursa B.",
            keywords: ["Călugăreni"],
            aliases: ["Bătălia de la Călugăreni"],
            rezolvare: "2 puncte pentru răspunsul: Călugăreni.\nSe punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).",
            maxScore: 2
        },
        {
            id: 2,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 2. </span>Precizați, din sursa A, o informație referitoare la acțiunile otomanilor din 1462.",
            keywords: [
                "în primăvara lui 1462, sultanul s-a îndreptat spre Dunăre pentru a pedepsi cutezanța sa",
                "otomanii atacă Chilia"
            ],
            aliases: [
                "atac asupra Chiliei",
                "ofensiva din primăvara lui 1462"
            ],
            rezolvare: `
2 puncte pentru oricare dintre răspunsurile:<br>
,, în primăvara lui 1462, sultanul s-a îndreptat spre Dunăre pentru a pedepsi cutezanța sa, , <br><br>
SAU<br><br>
,, otomanii atacă Chilia,, etc.<br>
Se punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).<br>
`,
            maxScore: 2
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "<span class=\"text-primary\">SUB 1 | 3. </span>Menţionaţi câte un domn al Țării Românești la care se referă sursa A, respectiv sursa B.",
            options: ["Vlad Țepeș", "Mihai Viteazul", "Nicolae Alexandru", "Stefan cel Mare"],
            correctAnswers: ["Vlad Țepeș", "Mihai Viteazul"],
            rezolvare: `
sursa A: Vlad Țepeș 3 puncte<br>
sursa B: Mihai Viteazul 3 puncte<br>
câte 3 puncte pentru fiecare răspuns: Vlad Țepeș, Mihai Viteazul<br>
Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).
(3px2=6p)<br>`,
            maxScore: 6
        },
        {
            id: 4,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 4. </span> Scrieţi, pe foaia de examen, litera corespunzătoare sursei care susţine că domnul organizează o campanie militară în sudul Dunării",
            keywords: ["A"],
            aliases: [],
            rezolvare: "3 puncte pentru scrierea literei A",
            maxScore: 3
        },
        {
            id: 5,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 5. </span>Scrieţi o relaţie cauză-efect stabilită între două informaţii selectate din sursa B, precizând rolul fiecăreia dintre aceste informaţii (cauză, respectiv efect).",
            keywords: [
                "autoritatile", "rascoala", "tarilor romane", "Imperiul otoman",
                "politic", "militar", "economic", "mii de oameni", "Sinan-Pasa", "Dunare"
            ],
            aliases: [
                "Autoritățile", "răscoala", "țărilor române", "sinan pasa", "Dunăre"
            ],
            rezolvare: `
Cauză: ,,Autoritățile nu puteau tolera răscoala țărilor române care lovea Imperiul otoman sub aspect politic, militar și economic,,<br>
efect: ,,<span class="text-purple-800">De aceea</span>, zeci de mii de oameni (poate 50 000), sub comanda marelui vizir Sinan-Pașa, sunt puși în mișcare spre Dunăre,,<br>
SAU<br>
Cauză: ,,<span class="text-purple-800">din cauza</span> disproporției forțelor,,<br>
efect: ,,Domnul nu putea lupta în câmp deschis,,<br>
            `,
            maxScore: 7
        },
        {
            id: 6,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 6. </span>Prezentați alte două acțiuni diplomatice la care au participat românii în secolele al XV-lea – al XVI-lea, în afara celei la care se referă sursa B.",
            keywords: ["Tratatul de la Colomeea", "Tratatul de la Overchelauti"],
            aliases: [
                "Tratatul de la Overchelăuți", "Tratatul de la Iași", "Tratatul de la Hârlău",
                "Tratatul de la Dealu", "Tratatul de la București"
            ],
            rezolvare: `
            <span class="text-red-600">câte 1 punct pentru menționarea oricăror două acțiuni diplomatice la care au participat românii în secolele al XV-lea – al XVI-lea, în afara celei la care se referă sursa B (1px2=2p)</span><br><br>
            <span class="text-purple-800">M1  O acțiune diplomatică la care au participat românii în secolul  al XV-lea este Tratatul de la Colomeea 1p<br>
            SAU Tratatul de la Overchelăuți 1p<br>
            SAU Tratatul de la Iași 1p<br>
            SAU  Tratatul de la Hârlău 1p<br><br>
            P1<br>
             *  1485 2p<br> 
             *  Ștefan cel Mare și Cazimir al IV lea 2p<br>
             *  Antiotoman 2p<br>
             *  Moldova stat vasal Poloniei 2p<br><br>
            M2   O acțiune diplomatică la care au participat românii în secolul al XVI-lea este Tratatul de la Dealu 1p<br>
            SAU Tratatul de la București 1p<br><br>
            P2<br>
            *1598 2p<br>
            *Mihai Viteazul și Rudolf al II lea 2p<br>
            * antiotoman 2p<br>
            *domnie ereditară 2p<br>
            *aderarea directă la Liga Sfântă 2p</span><br><br>
            Exemple: <span class="text-red-600">acceptarea suzeranității poloneze de către Alexandru cel Bun, Tratatul de la Hârlău încheiat de Ștefan cel Mare, Tratatul de la Mănăstirea Dealu etc. câte 2 puncte pentru prezentarea fiecărei acțiuni diplomatice menționate - o scurtă expunere în care sunt precizate două informații referitoare la acțiunea diplomatică (2px2=4p)</span><br>
            `,
            maxScore: 6
        },
        {
            id: 7,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 1 | 7. </span>Menţionaţi o asemănare între două fapte istorice desfășurate de români în secolul al XIV-lea.",
            keywords: [" "],
            aliases: [" "],
            rezolvare:
            `
            <span class="text-red-600">4 puncte pentru menționarea oricărei asemănări între două fapte istorice desfășurate de români în secolul al XIV-lea Exemple: obținerea independenței față de Ungaria, caracter antiotoman etc. Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț)</span>
            `,
            maxScore: 6
        },
        {
            id: 8,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 1. </span>Numiţi o mare alianță precizată în sursa dată.",
            keywords: ["Antanta"],
            aliases: ["Antanta", "Puterile Centrale"],
            rezolvare: `
            <span class="text-red-600">2 puncte pentru oricare dintre răspunsurile:<br>
            Antanta, Puterile Centrale<br>
            Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).</span><br>
            `,
            maxScore: 2
        },
        {
            id: 9,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 2. </span>Precizaţi secolul la care se referă sursa dată.",
            keywords: ["XX-lea"],
            aliases: ["XX"],
            rezolvare: `
            <span class="text-red-600">2 puncte pentru răspunsul:<br>
            al XX-lea<br>
            Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).<br></span>
            `,
            maxScore: 6
        },
        {
            id: 10,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 3. </span>Menţionaţi șeful guvernului din 1914 și o caracteristică a opiniei publice din România, la care se referă sursa dată.",
            keywords: [
                "I.I.C. Bratianu", "eliberarea naționala", "austro-ungara",
                "Antantei", "Romaniei", "Puterilor Centrale"
            ],
            aliases: [
                "I.I.C. Brătianu", "eliberarea națională", "austro ungară",
                "Antanta", "României", "Puterilor Centrale"
            ],
            rezolvare:
            `
            <span class="text-red-600">"I.I.C. Brătianu 3 puncte<br>
            ,,opinia publică românească [...] cu gândul la eliberarea națională a românilor din provinciile aflate sub stăpânire austro-ungară [...] - Transilvania, Banat, Bucovina - avea să opteze pentru intrarea în război alături de puterile Antantei,,   3 puncte<br><br>
            SAU<br><br>
            ,, opinia publică influențează intrarea României în război împotriva Puterilor Centrale ,,etc. 3 puncte<br>
            Se punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).<br></span>
            `,
            maxScore: 6
        },
        {
            id: 11,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 4. </span>Menţionaţi, din sursa dată, două informații referitoare la evenimentele din anul 1917.",
            keywords: ["marasti", "Marasesti", "victorie romaneasca", "Primului Razboi Mondial", "Oituz"],
            aliases: ["Mărăști", "Mărășești", "victorie românească", "Primului Război Mondial"],
            rezolvare: `<span class="text-red-600">câte 3 puncte pentru menționarea, din sursa dată, a oricăror două informații referitoare la evenimentele din anul 1917 (3px2=6p)<br><br>
            Exemple:<br><br>
            ,, Seria marilor bătălii victorioase din lunile iulie-august 1917 a început cu cea de la Mărăști; a continuat cu celebra bătălie de la Mărășești, cea mai de seamă victorie românească în timpul Primului Război Mondial,, 3 puncte<br>
            ,, în bătălia de la Oituz e oprită înaintarea adversarului,, etc. 3 puncte<br>
            Se  punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).</span><br>`,
            maxScore: 6
        },
        {
            id: 12,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 5. </span>Formulaţi, pe baza sursei date, un punct de vedere referitor la acțiunile militare desfășurate în anul 1916, susținându-l cu două informații selectate din sursă.",
            keywords: ["1916", "aciuni militare"],
            aliases: ["acțiuni militare"],
            rezolvare: `
            4 puncte pentru formularea, pe baza sursei date, a oricărui punct de vedere referitor la acțiunile militare desfășurate în anul 1916 câte 3 puncte pentru selectarea, din sursa dată, a oricăror două informaţii care susţin punctul de vedere formulat (3px2=6p)<br><br>
            Exemple:</span><br><br>
            <span class="text-purple-800">"Conform sursei,</span> <span class="text-red-600>"acțiunile militare desfășurate în anul 1916 au consecințe politice negative pentru România. 4 puncte<br><br>
            Informațiile care susțin punctul de vedere sunt:<br><br>
            ,, Astfel, în decembrie 1916, Capitala era ocupată, o bună parte a teritoriului național intrând sub ocupația militară a Puterilor Centrale ,, 3 puncte<br>
            ,, De la această dată, armata română și, odată cu ea, autoritățile și principalele instituții ale statului, se retrag în Moldova,,.  3 puncte<br><br>
            SAU</span><br><br>
            <span class="text-purple-800">Conform sursei,</span> <span class="text-red-600">în acțiunile militare desfășurate în anul 1916 armata română nu este susținută de Antanta. 4 puncte<br><br>
            Informațiile care susțin punctul de vedere sunt:<br><br>
            ,,Succesul a fost de scurtă durată, fiindcă [...] armata română, neajutată la timp de aliați, este obligată să se retragă, în fața trupelor germane și austro-ungare,,. 3 puncte<br>
            ,, În același timp, România era atacată de inamic și pe frontul de sud, de către trupele germane, conduse de generalul Mackensen, cărora se alăturau trupele bulgare și turcești, în condițiile în care aliații nu-și îndepliniseră angajamentul de a acoperi sudul României cu ofensiva lor,,. etc.  3 puncte<br>
            Punctajul total (10 puncte) sau cel parțial (7 puncte) se acordă răspunsului care cuprinde atât punctul de vedere, cât și informațiile/informația. Nu se punctează doar punctul de vedere sau doar informațiile/informația.</span><br>
`,
            maxScore: 4
        },
        {
            id: 13,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 2 | 6. </span>Argumentaţi, printr-un fapt istoric relevant, afirmația conform căreia democrația din România Mare se consolidează în perioada 1921-1930.",
            keywords: ["Constitutie 1923"],
            aliases: ["Constituție 1923", "Constituția 1923", "Constitutia 1923"],
            rezolvare:
            `
            <span class="text-red-600">4 puncte pentru argumentarea afirmației date - prezentarea oricărui fapt istoric relevant (de exemplu: organizarea alegerilor pe baza votului universal, adoptarea Constituției din 1923 etc. ) prin precizarea a două informații referitoare la acest fapt și prin utilizarea conectorilor care exprimă cauzalitatea (deoarece, pentru că etc.) şi concluzia (aşadar, astfel etc.)<br><br>
            CAUZA:</span> <span class="text-purple-800">DATORITĂ</span> <span class="text-red-600">realizării României Mari în anul 1918, noi provincii au intrat în granița statului român și era necesară o legislație unitară.<br><br>
            EVENIMENT:</span> <span class="text-purple-800">1923 Constituție</span><br><br>
            <span class="text-red-600">*  Separarea puterilor în stat<br>
            *  Pluripartidism<br>
            *  Drepturi și libertăți<br>
            *  Vot universal pentru bărbați 21 ani<br><br<>
            CONSECINȚĂ:</span> <span class="text-purple-800">ASTFEL,</span> <span class="text-red-600">Constituția adoptată de regele Ferdinand a consolidat regimul democrat. 4 puncte</span><br>
            `,
            maxScore: 4
        },
        {
            id: 14,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 3 | REP 1 </span>Precizarea unei acțiuni politice desfășurate în România între anii 1946-1960 și menționarea a două aspecte referitoare la aceasta",
            keywords: ["Constitutia din 1948"],
            aliases: ["Constituția din 1948", "Colectivizarea 1949"],
            rezolvare: `
<span class="text-rd-600>- 2 puncte pentru precizarea câte 3 puncte pentru menționarea oricăror două aspecte referitoare la aceasta (de exemplu:) (3px2=6p)</span><br><br>
R1<br><br>
<span class="text-purple-800">C1 o acțiune politică desfășurată în România între anii 1946-1960 este:<br>
            
Constituția din 1948     2puncte<br>
C2 un aspect refritor la aceasta: legitimează regimul totalitar  3 puncte<br>
C2 prevede constituirea Marii Adunări Naționale, statul se numește Republica Populară Română etc.  3 puncte</span><br><br>
SAU<br><br><span class="text-rose-600">*    colectivizarea    2 puncte<br>
C1 se desfășoară după model sovietic, vizează proprietatea privată asupra pământului  3 puncte<br>
C2  e însoțită de represiune politică etc  3 puncte</span><br>`,
            maxScore: 8
        },
        {
            id: 15,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 3 | REP 2 </span>Menționarea a două măsuri adoptate în politica internă a României între anii 1964-1985",
            keywords: ["Constitutia din 1965", "Tezele din iulie 1971"],
            aliases: ["Constituția din 1965", "cumulul de funcții", "cumulul de functii", "raționalizarea", "rationalizarea"],
            rezolvare: `R2<br><br>
            <span class="text-emerald-400">DEOARECE</span> <span class="text-red-600">puterea a fost preluată în anul 1965 de către Nicolae Ceaușescu, în România s-a instaurat regimul național-comunist</span><br>
            <span class="text-purple-800">C1 O măsură adoptată în politica internă a României între anii 1964-1985 este adoptarea Constituției din 1965  3 puncte<br>
            C2 O altă măsură este introducerea cultului personalității prin Tezele din iulie 1971</span><br><br>
            SAU<br><br>
            <span class="text-rose-600">C1 O măsură adoptată în politica internă a României între anii 1964-1985 este cumulul de funcții 3 puncte<br>
            C2 O altă măsură adoptată în politica internă  a României este raționalizarea    3 puncte</span><br>
            <span class="text-emerald-400">ASTFEL</span> <span class="text-red-600">au fost încălcate drepturile și libertățile cetățenilor</span><br>`,
            maxScore: 8
        },
        {
            id: 16,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 3 | REP 3 </span>Prezentarea unui fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale",
            keywords: ["Conferința de la Moscova 1967", "Actul Final al Conferintei de la Helsinki"],
            aliases: [
                "Actul Final al Conferinței de la Helsinki",
                "Conferinta de la Helsinki",
                "Conferința de la Helsinki",
                "Armatei Roșii în Cehoslovacia",
                "Armatei Rosii în Cehoslovacia",
                "Primavara de la Praga 1968"
            ],
            rezolvare: `R3<br><br>
            <span class="text-red-600">M1</span> <span class="text-rose-600">Un fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale este Conferința de la Moscova defășurată în 1967  2 puncte</span><br>
            <span class="text-red-600">CAUZA:</span> <span class="text-purple-800">DATORITĂ</span> <span class="text-rose-600">Războiul de 6 zile desfășurat între Egipt aliat cu Siria și Israel liderul U.R.S.S.-ului Leonid Brejnev a convocat la Kremlin șefii statelor comuniste.</span><br>
            <span class="text-red-600:>PREZENTARE:</span> <span class="text-rose-600">U.R.S.S.  a cerut statelor comuniste să susțină lupta popoarelor arabe și să întrerupă relațiile cu Israelul, simbolul ,, imperialismului,, american.Ceuașescu a concluzionat faptul că prin măsurile economice luate împotriva Israelului, Nasser a provocat declanșarea conflictului, dreptu urmare nu a rupt relațiile României cu Israelul.</span><br>
            <span class="text-red-600">CONSECINȚĂ:</span> <span class="text-rose-600">ASTFEL atenția statelor occidentale s-a îndreptat spre România. 3 puncte</span><br><br>
            SAU<br><br>
            <span class="text-red-600">M1</span> Un fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale este semnarea Actul Final al Conferinței de la Helsinki  2 puncte</span><br>
            <span class="text-red-600">CAUZA:</span> <span class="text-purple-800">DEOARECE</span> <span class="text-rose-600">europenii aveau ca obiectiv securitatea și cooperarea între stalele Europei la nivel bilateral și multilateral.</span><br>
            <span class="text-red-600">PREZENTARE:</span><span class="text-rose-600">În anul 1975, 35 de state au semnat Actul Final al Conferinței de la Helsinki care a stat la baza înființării Organizației pentru Securitate și Cooperare în Europa(OSCE).Documentul cuprindea angajamente obligatorii din punct de vedere politic legate de securitatea politico-militară, de mediu, economică și umană.În plus era prevăzută cooperarea în domeniul tehnico-științific și umanitar iar problema cheie era reprezentată de respectarea drepturilor omului.Actul final recunoștea în primul capitol legitimitatea regimurilor comuniste din estul Europei, motiv pentru care liderii comuniști, inclusiv Nicolae Ceaușescu și-au lat angajamentul de a respecta drepturile fundametale ale omului.</span><br> 
            <span class="text-red-600">CONSECINȚĂ:</span> <span class="text-rose-600">ASTFEL România determină Occidentul să creadă într-o ,,liberalizare,, a regimului. 3 puncte</span><br><br>
            SAU<br><br>
            <span class="text-red-600">M1</span> <span class="text-rose-600">Un fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale este condamnarea intervenției Armatei Roșii în Cehoslovacia. 2 puncte</span><br>
            <span class="text-red-600">CAUZA:</span> <span class="text-purple-800">DEOARECE</span>  <span class="text-rose-600">Nicolae Ceaușescu a promovat detașarea față de Moscova, în anul1968 a condamnat intervenția Armatei Roșii în Cehoslovacia.</span><br>
            <span class="text-red-600">PREZENTARE:</span><span class="text-rose-600">În discursul din 21 august 1968, Ceușescu a respins intervenţia armată a Tratatului de la Varşovia și a decretat mobilizare generală.Evenimentul a modificat atitudinea României vis-a –vis de Tratatul de la Varșovia, deoarece România a refuzat să mai participe la manevrele militare  efectuate pe teritoriul celorlalte state membre ale Tratatului și a respins participarea armatelor altor state la menevre militare pe teritoriul său.<br>
            În anul 1968 a avut  loc vizita preşedintelui Franţei Charles de Gaulle, care l-a felicitat pe Ceaușescu pentru politica lui de independenţă, iar în august 1969 a vizitat România preşedintele SUA, Richard Nixon, prima vizită a unui preşedinte american într-o ţară comunistă.</span><br>
            <span class="text-red-600">CONSECINȚĂ:</span> <span class="text-rose-600">ASTFEL România a primit sprijin din partea Occidentului. 3 puncte</span><br>
            `,
            maxScore: 8
        },
        {
            id: 17,
            type: "open-ended",
            question: "<span class=\"text-primary\">SUB 3 | REP 4 </span>Formularea unui punct de vedere referitor la consolidarea democrației postdecembriste în perioada 1990-1995 şi susținerea acestuia printr-un argument istoric",
            keywords: ["Constitutiei din 1991"],
            aliases: ["Constituției din 1991"],
            rezolvare: `R4<br><br>
            <span class="text-red-600">PUNCT DE VEDERE</span>:Democarația postdecembristă a fost consolidată <span class="text-purple-800>datorită</span> garantării drepturilor și libertăților cetățenești prin introducerea unor măsurilor legislative. 1 punct<br>
            <span class="text-red-600">ARGUMENT:</span> <span class="text-purple-800>Datorită</span>  adoptării Constituției din 1991 s-a revenit la statul de drept.<span class="text-purple-800>Astfel</span> Constituția din 1991 reintrodus drepturile și libertățile cetățenești, pluripartidismul, separarea puterilor în stat etc 4 puncte<br>
            - 1 punct pentru formularea oricărui punct de vedere referitor la consolidarea democrației postdecembriste în perioada 1990-1995 (de exemplu: Garantarea drepturilor și libertăților cetățenești a contribuit la consolidarea democrației postdecembriste în perioada 1990-1995.; Consolidarea democrației postdecembriste în perioada 1990-1995 se realizează prin măsuri legislative. etc.) 4 puncte pentru susținerea punctului de vedere formulat printr-un argument istoric – prezentarea oricărui fapt istoric relevant, prin precizarea a două informații referitoare la acest fapt și utilizarea conectorilor care exprimă cauzalitatea (deoarece, pentru că etc.) şi concluzia (<span class="text-purple-800>astfel, așadar</span> etc.)<br>
            <span class="text-red-600">CONCLUZIE FINALĂ:</span> rezumatul eseului, realizat în maxim 6-8 rânduri.<br>
            Informaţia istorică – 24 de puncte distribuite astfel:<br>
            Ordonarea şi exprimarea ideilor menţionate – 6 puncte distribuite astfel: <br>
            - 2 puncte pentru utilizarea limbajului istoric adecvat 1 punct pentru utilizarea parţială a limbajului istoric adecvat - 1 punct pentru structurarea eseului (introducere - cuprins - concluzie)<br>
            - 2 puncte pentru respectarea succesiunii cronologice/logice a faptelor istorice 1 punct pentru respectarea parţială a succesiunii cronologice/logice a faptelor istorice <br>
            - 1 punct pentru respectarea limitei de spaţiu<br>
           Notă! Se punctează şi utilizarea limbajului istoric adecvat, structurarea prezentării, evidenţierea relaţiei cauză-efect, elaborarea argumentului istoric (prezentarea unui fapt istoric relevant și utilizarea conectorilor care exprimă cauzalitatea şi concluzia), respectarea succesiunii cronologice/logice a faptelor istorice şi încadrarea eseului în limita de spaţiu precizată.<br>
           `,
            maxScore: 8
        }
    ];

    const displayResults = (score, totalScore) => {
        let resultsHTML = `<h2 class="text-2xl font-bold mb-4">Your final score: ${Math.round(score)}/${totalScore}</h2>`;
        resultsHTML += '<div class="space-y-4 mb-4">';

        questions.forEach((question, index) => {
            const studentAnswer = studentAnswers[index] || 'No answer provided';
            const isCorrect = checkAnswer(studentAnswer, question);

            resultsHTML += `
            <div class="border p-4 rounded-md mb-4">
                <h3 class="font-semibold">${question.question}</h3>
                <p class="mt-2"><strong>Your answer:</strong> ${Array.isArray(studentAnswer) ? studentAnswer.join(', ') : studentAnswer}</p>
                <p class="mt-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                    <strong>Result:</strong> ${isCorrect ? 'Correct' : 'Incorrect'}
                </p>
                <div class="mt-2 bg-gray-50 p-3 rounded">
                    <strong>Solution:</strong>
                    <pre class="whitespace-pre-wrap">${question.rezolvare}</pre>
                </div>
            </div>
        `;
        });

        resultsHTML += '</div>';
        return resultsHTML;
    };

    let currentIndex = 0;
    const studentAnswers = new Array(questions.length).fill('');

    const questionContainer = document.getElementById("questionContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    const renderQuestion = () => {
        const question = questions[currentIndex];
        questionContainer.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">${question.question}</h2>
            ${question.type === "multiple-choice"
                ? `<div class="flex flex-wrap gap-4">
                          ${question.options
                    .map(
                        (option, i) =>
                            `<button data-index="${i}" class="option px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 my-2 ${Array.isArray(studentAnswers[currentIndex]) &&
                                studentAnswers[currentIndex].includes(option) ?
                                'bg-primary text-white' : ''
                            }">${option}</button>`
                    )
                    .join("")}
                       </div>`
                : `<textarea id="answerInput" class="w-full border p-2 rounded-md" placeholder="Type your answer here...">${studentAnswers[currentIndex] || ""}</textarea>`
            }
        `;

        if (question.type === "multiple-choice") {
            const options = document.querySelectorAll(".option");
            options.forEach((option) => {
                option.addEventListener("click", (e) => {
                    if (!Array.isArray(studentAnswers[currentIndex])) {
                        studentAnswers[currentIndex] = [];
                    }

                    const answerIndex = studentAnswers[currentIndex].indexOf(e.target.innerText);

                    if (answerIndex === -1) {
                        studentAnswers[currentIndex].push(e.target.innerText);
                        option.classList.add('bg-primary', 'text-white');
                    } else {
                        studentAnswers[currentIndex].splice(answerIndex, 1);
                        option.classList.remove('bg-primary', 'text-white');
                    }
                });
            });
        }
    };

    const navigateQuestions = (direction) => {
        const answerInput = document.getElementById("answerInput");
        if (answerInput) {
            studentAnswers[currentIndex] = answerInput.value;
        }

        currentIndex += direction;
        renderQuestion();

        prevBtn.disabled = currentIndex === 0;
        nextBtn.style.display = currentIndex < questions.length - 1 ? 'block' : 'none';
        submitBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
    };

    const checkAnswer = (answer, question) => {
        if (!answer) return false;

        if (question.type === "open-ended" && typeof answer === "string") {
            const lowerCaseAnswer = answer.toLowerCase();
            return (
                question.keywords.some((kw) => lowerCaseAnswer.includes(kw.toLowerCase())) ||
                question.aliases.some((alias) => lowerCaseAnswer.includes(alias.toLowerCase()))
            );
        } else if (question.type === "multiple-choice" && Array.isArray(answer)) {
            return (
                answer.length === question.correctAnswers.length &&
                answer.every((ans) => question.correctAnswers.includes(ans))
            );
        }
        return false;
    };

    const calculateScore = () => {
        let totalScore = 0;

        questions.forEach((question, index) => {
            const answer = studentAnswers[index];
            if (!answer) return;

            if (question.type === "open-ended" && typeof answer === "string") {
                const lowerCaseAnswer = answer.toLowerCase();
                const keywordMatch = question.keywords.some(kw =>
                    lowerCaseAnswer.includes(kw.toLowerCase())
                );
                const aliasMatch = question.aliases.some(alias =>
                    lowerCaseAnswer.includes(alias.toLowerCase())
                );

                if (keywordMatch || aliasMatch) {
                    totalScore += question.maxScore;
                }
            } else if (question.type === "multiple-choice" && Array.isArray(answer)) {
                const correctAnswers = question.correctAnswers;
                const correctSelections = answer.filter(ans =>
                    correctAnswers.includes(ans)
                ).length;

                if (answer.every(ans => correctAnswers.includes(ans))) {
                    totalScore += (correctSelections / correctAnswers.length) * question.maxScore;
                }
            }
        });

        return totalScore;
    };

    submitBtn.addEventListener("click", () => {
        const answerInput = document.getElementById("answerInput");
        if (answerInput) {
            studentAnswers[currentIndex] = answerInput.value;
        }

        const score = calculateScore();
        const totalScore = questions.reduce((acc, q) => acc + q.maxScore, 0);
        questionContainer.innerHTML = displayResults(score, totalScore);
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        submitBtn.classList.add("hidden");
    });

    nextBtn.addEventListener("click", () => navigateQuestions(1));
    prevBtn.addEventListener("click", () => navigateQuestions(-1));

    renderQuestion();
    prevBtn.disabled = true;
});
