// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Home
          "motto":"The magic of programing!",
          "about_title": "About me",
          "references_title": "References",
          "skillset_title": "Skillset",
          "contact_title": "Contact",
          // About me
          "img_text": "Smiling boy!",
          "title1": "Personality",
          "text1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "title2": "School",
          "text2": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "title3": "Programing",
          "text3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "title4": "Social",
          "text4": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          // Skillset
          "main_title": "Skillset",
          "react_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "node_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "c#_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "php_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          "cv_title": "CV",
          "cv_hun": "Hungarian CV",
          "cv_eng": "CV",
          "cover_letter_hun": "Hungarian cover letter",
          "cover_letter_eng": "Cover letter",
          "knowlegde_title": "Knowledge",
          "knowledge_text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ",
          // Contact
          "c_title": "Contact",
          "placeholder1": "From",
          "placeholder2": "Subject",
          "placeholder3": "Message",
          "c_mobile":"Telephone",
          "c_mail":"Email",
          // References
          "r_title": "References"
        }
      },
      hu: {
        translation: {
          // Főoldal
          "motto":"A programozás varázsa!",
          "about_title": "Rólam",
          "references_title": "Referenciák",
          "skillset_title": "Skillset???",
          "contact_title": "Kapcsolat",
          // Rólam
          "img_text": "Mosolygós fiú!",
          "title1": "Személyiségem",
          "text1": "Ide kéne írni valami bekezdést, hogy milyen személyiség is vagyok",
          "title2": "Tanulmányaim",
          "text2": "Középiskolás éveimet a VSZC Ipari Tehcnikumban töltöttem Informatika szakon, hisz már akkor is tudtam, hogy ezen a téren szeretnék elhelyezkedni. Több szakmai versenyen is részt vettem kiemelkedő eredményekkel! Jelenleg Az Óbudai Egyetem Neumann János Mérnökinformatika karán tanulok a 2. félévemben és a jövőben a Mesterséges Inteligencia irányába szeretnék szakosodni.",
          "title3": "Programozás",
          "text3": "Már kiskorom óta foglalkozok a számítógépek világával. Amikor megismertem ezt a világot a programozás egyből felkeltette a kíváncsiságom és elkezdtem igazán mélyen beleásni magamat. Ahogy telt az idő a tudásom egyre szerteágazóbb lett! Több technológiát is kipróbáltam és tanultam középiskolában, jelenleg egyetemen illetve az internetről különböző tanfolyamokból. A referenciák fül alatt többet tudtok erről olvasni ott részletezem a projekteket!",
          "title4": "Közösség",
          "text4": 'Középiskolában 4 évig a Diákönkormányzat elnöke voltam és ezalatt a pályafutásom alatt minden évben megszámlálhatatlan programot szerveztem. Különböző sport napokat, közösségi eseményeket vagy éppen tanfolyamokat a diákoknak. Emellett sok sportágat is kipróbáltam így megtanultam csapatban játszani, majd "magányos" sportokat kipróbálva megtanultam egyedül is jó eredményeket elérni. Jelenleg az egyetemen a Hallgatói Önkormányzattal közösen a gólyatábor megszervezésében és lebonyolításában kimagasló szerepet játszok és jövőre tervezem a pályafutásom folytatni köztük. ',
          // Skillset
          "main_title": "Skillset",
          "react_text": "A React.js-el az első kalandom az egy Hackathlonon volt, amikor kb 1 hónapom volt az alapjait megtanulni, majd a versenyen 24 órám egy projektet készíteni 2 osztálytásammal még a középiskolás éveimből. Már akkor megtetszett a technológia sokszínűsége és ezután kezdtem el részletesebben foglalkozni vele. Azóta számtalan projektet készítettem, valamint a GE Healthcare-nél is ebben fejlesztek!",
          "node_text": "Nemsokkal a React.js után ismertem meg a Javascriptnek a backend változatát. A Javascript egyszerűsége megfogott, majd a Node.js komplexitása megtartott. Több projektet is készítettem ezzel a technológiával, DIscord bot-tól kezdve IoT rendszereken át Weboldalaknak a szerveroldalát. A sok szárny bontogatás után, már magabiztosan mozgok ebben a rendszerben és úgy gondolom, sok potenciál van ebben a nyelvben.",
          "c#_text": "Középiskolában ismerkedtem meg ezzel a nyelvvel előtte Javát tanultam online. Szerencsémre a suliban nagyon az alapoktól kezdtük és olyanokat tanultam, amiket online szerintem szinte soha. Innen felépítve egészen a komolyabb algoritmusokig sok dolgot tanultam, illetve az egyetemen is ezt a nyelvet preferálják. Ebben a technológiában a bonyolult algoritmusok könnyen elsajátithítók és megvalósíthatók, illetve bomba biztosabb mint más nyelvek.",
          "php_text": "Ez volt az első backend nyelv amivel megismerkedtem. Sokak szerint már eljárt az idő felette, de szerintem a megbízhatósága még mindig kiemelkedő és az internet nagy része még erre épül. Több összetettebb projektet készítettem vele és az összetetségének ellenére szerintem gyorsan átlátható és tanulható.",
          "cv_title": "Önéletrajz",
          "cv_hun": "Magyar önéletrajz",
          "cv_eng": "CV",
          "cover_letter_hun": "Motivációs levél",
          "cover_letter_eng": "Cover letter",
          "knowlegde_title": "Tudásom",
          "knowledge_text": "Különböző helyről szedtem össze és építettem fel a tudásomat. Sokan mondják hogy az autodidakta tanulásé a jövő ebben a szakmában én azonban ezt máshogy gondolom. Igaz ha valamit meg szeretnél tanulni meg tudod egyedül is a netről, de azért ha egy tapasztalt programozó megmutatja a trükköket, vagy, hogy mire figyeljünk az sokat segít a tudásunkban. Ezért is jártam ilyen középiskolába illetve ilyen egyetemre. Már mindkettő intézményben tanultam olyat, amit online csak nagyon nehezen tanul meg az ember. Középiskolában a különböző tanulmányi versenyeimen külön mentoraim voltak a különböző nyelvekből vagy technológiákból. Sokat tudtam tőlük tanulni amit a mai napig használok. Azonban a mentorotkól szerintem, csak a tudásunk kis részét kapjuk ez amolyasféle tudáskiegészítés. Ahogy a mondás is tartja: A gyakorlat teszi a mestert! Ahogy készítettem a különböző projektetket én is sok dolgot felfedeztem és tanultam meg magamtól, amit sem az iskolákban sem másoktól nem tudtam meg. Összeségében a tudásomat igyekszek több forrásból felépíteni és napról napra gyarapítani.",
          // Contact
          "c_title": "Kapcsolat",
          "placeholder1": "Feladó",
          "placeholder2": "Tárgy",
          "placeholder3": "Üzenet",
          "c_mobile":"Telefon",
          "c_mail":"Email",
          // References
          "r_title": "Referenciák"
        }
      }
    },
    lng: "hu", // default language
    fallbackLng: "hu",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
