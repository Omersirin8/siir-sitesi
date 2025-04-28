const fade1 = document.getElementById('fade1');
const fade2 = document.getElementById('fade2');
const altMenu = document.getElementById('alt-menu');

// Animasyonlar
setTimeout(() => {
    fade1.style.opacity = 1;
}, 800);

setTimeout(() => {
    fade1.style.opacity = 0;
}, 3700);

setTimeout(() => {
    fade2.style.opacity = 1;
}, 5200);

setTimeout(() => {
    fade2.style.opacity = 0;
}, 8500);

setTimeout(() => {
    altMenu.style.display = 'block';
}, 9400);

// Şiirler popup
function showPoems() {
    const poemsWindow = window.open("", "poemsPage", "width=700,height=800");
    poemsWindow.document.write(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <title>Şiirlerim</title>
        <style>
            body {
                background-color: #013220;
                color: #ffffff;
                font-family: 'Segoe UI', sans-serif;
                padding: 20px;
                text-align: center;
            }
            h1 {
                color: #c9fdd7;
                margin-bottom: 20px;
            }
            .poem-card {
                background-color: #014421;
                margin: 20px auto;
                padding: 20px;
                max-width: 500px;
                border-radius: 10px;
                border-left: 5px solid #1d6b34;
                box-shadow: 0 0 10px rgba(0,0,0,0.3);
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .poem-card:hover {
                background-color: #1d6b34;
            }
            .poem-card h2 {
                margin: 0;
                color: #b2ffc8;
                font-size: 1.3rem;
            }
            .navigation-buttons {
                margin-top: 30px;
                display: flex;
                justify-content: center;
                gap: 20px;
            }
            .navigation-buttons button {
                background-color: #014421;
                color: #c9fdd7;
                border: 2px solid #c9fdd7;
                border-radius: 8px;
                padding: 12px 24px;
                font-size: 1.1rem;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .navigation-buttons button:hover {
                background-color: #1d6b34;
            }
        </style>
    </head>
    <body>
        <h1>- Şiirlerim -</h1>

       <div class="poem-card" onclick="openPoem('Benden De Öte', \`İki yanım vardır, biri bilmece!\nHer an bir işteyim, Gündüz ve Gece!\nBir deniz var içte, pek de derince!\nBir ben var içimde, benden de öte!\n\nYok benim sınırım, yok benim çizgim!\nBen en yakın göğe, yıldızlar dizdim!\nDünya yollarında, epey yol gezdim!\nBir ben var içimde, benden de öte!\n\nEsenlik eyledim, yanan ateşi!\nİzlerim Dünya’yı, Ay’ı, Güneş’i!\nArştaki özümün, yoktur bir eşi!\nBir ben var içimde, benden de öte!\n\nYağmur damlaları, denize düştü!\nKelebekler uçup, ateşe düştü!\nBenim özüm artık, O’na dönüştü!\nBir ben var içimde, benden de öte!\`)">
        <h2>Benden De Öte</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Ben Varım', \`Gönül bin yol aşıp, sona yanaştı\nHatta ondan öte, sonu da aştı\nGönlümün deryası, aşk ile taştı\nSemâda ben varım, yeryüzünde ben!\n\nBütün karanlıkta, gece içinde\nŞafak zamanında, bülbül dilinde\nÂşık içindeyim, gönül ilinde\nGönülde ben varım, âşıklarda ben!\n\nAkan bir gemiydim, sonunda durdum\nMânâ denizinden, karaya vurdum\nBir yanan ateştim, yanıp tutuştum\nMânâda ben varım, derinlerde ben!\n\nHer güzel şeydeyim, görünmezdeyim\nBir sırrın içinde, bilinmezdeyim\nAşığım, Ömer’im, ölmez özdeyim\nGeçmişte ben varım, gelecekte ben!\`)">
        <h2>Ben Varım</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Göremez Beni', \`Yûsuf’un yanında, o kuyudayım\nTüm yalnızlığında, her ânındayım\nUzakta değilim, en yakındayım\nYûsuf’un gözleri, göremez beni!\n\nYûnus’un yanında, balık içinde\nDerin sulardayım, deniz içinde\nBen onu görürken, feryât içinde\nYûnus’un gözleri, göremez beni!\n\nMûsa maksâdını, görmeyi andı\nGörülmez olanı, görülür sandı\nNûr tecelli etti, dağ parçalandı\nMûsâ’nın gözleri, göremez beni!\n\nGözlerden uzağım, bir görülmezim\nHem bilinenim hem, bir bilinmezim\nAdım Ömer Faruk, özde bir gizim\nFânîlerin gözü, göremez beni!\`)">
        <h2>Göremez Beni</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Hâlim Üstüne Hal Mi Var', \`Erdi hâlim aşktan nâra\nO nâr ki cân katar câna\nAkıl ermez bu esrâra\nHâlim üstüne hal mi var?\n\nPek aradım ben kendimi\nYaktım aşkla tüm sînemi\nBir nâr-ı aşk, vurdu beni\nHâlim üstüne hal mi var?\n\nPek aradım ben yüzümü\nRabde buldum ben özümü\nNeyler gâfil hak sözümü\nHâlim üstüne hal mi var?\n\nHayat mânâdır Ömer’e\nMânâ lütuf tüm erene\nHangi eren ben üstüne\nHâlim üstüne hal mi var?\`)">
        <h2>Hâlim Üstüne Hal Mi Var</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Ölmedim Ki Ben', \`Toprağın içinde sanma sen beni\nDışındayım kabrin diri bil beni\nCümle alem öldü bilirken beni\nHiçbir gün hiçbir an ölmedim ki ben!\n\nDeğmedi özüme ölüm meleği\nDeğemez özüme meleğin eli\nGelse de bedenin o gün eceli\nHiçbir gün hiçbir an ölmedim ki ben!\n\nBir sırra sahibim özüm hakkında\nBir sırra dahilim ölüm hakkında\nÖldü derler iken benim hakkımda\nHiçbir gün hiçbir an ölmedim ki ben!\`)">
        <h2>Ölmedim Ki Ben</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Sûretimdir Ancak Benim', \`Bazı anlar dert taşıyan\nBuhrân ile günler aşan\nHata ile zünnûn olan\nSuretimdir ancak benim\n\nGözler ile görülen ben\nGözler ile bakılan ben\nEller ile gömülen ben\nSuretimdir ancak benim\n\nGerisinde boş söz eden\nDert meyine meyil eden\nBazı anda yanlış eden\nSuretimdir ancak benim\n\nSor Ömer’in sen aslını\nBir o var ki ondan öte\nSuret değil gerçek aslı\nBir özü var özden öte\`)">
        <h2>Sûretimdir Ancak Benim</h2>
      </div>

      <div class="poem-card" onclick="openPoem('Sır', \`Giz yolunu hiç bilmezdim\nBin yolu ben hiç gezmezdim\nBâtına ben hiç ermezdim\nOlmasaydı sırrı kalbin\n\nİndim gönle Güneş gibi\nYandım aşkla ateş gibi\nOlur muydum ayyaş gibi\nOlmasaydı sırrı kalbin\n\nTaktım arda Âlemleri\nVerdim nâra göğü yeri\nÇarpmazdım ben sineleri\nOlmasaydı sırrı kalbin\n\nKimdir Ömer dedikleri\nNedir sırra erdikleri\nBilmezdim hiç gizemleri\nOlmasaydı sırrı kalbin\`)">
        <h2>Sır</h2>⬅️ Ana Sayfa</button>
        </div>

        <script>
            function openPoem(title, text) {
                const poemWindow = window.open("", "_blank", "width=500,height=600");
                poemWindow.document.write(\`
                <!DOCTYPE html>
                <html lang="tr">
                <head>
                    <meta charset="UTF-8">
                    <title>\${title}</title>
                    <style>
                        body {
                            background-color: #013220;
                            color: #ffffff;
                            font-family: 'Segoe UI', sans-serif;
                            padding: 20px;
                            text-align: center;
                        }
                        h1 {
                            color: #c9fdd7;
                            margin-bottom: 20px;
                        }
                        p {
                            white-space: pre-line;
                            font-size: 1.2rem;
                            line-height: 1.8;
                        }
                        .navigation-buttons {
                            margin-top: 20px;
                            display: flex;
                            justify-content: center;
                            gap: 20px;
                        }
                        .navigation-buttons button {
                            background-color: #014421;
                            color: #c9fdd7;
                            border: 2px solid #c9fdd7;
                            border-radius: 8px;
                            padding: 8px 20px;
                            font-size: 1rem;
                            cursor: pointer;
                            transition: background-color 0.3s;
                        }
                        .navigation-buttons button:hover {
                            background-color: #1d6b34;
                        }
                    </style>
                </head>
                <body>
                    <h1>\${title}</h1>
                    <p>\${text}</p>
                    <div class="navigation-buttons">
                        <button onclick="history.back()">⬅️ Geri</button>
                        <button onclick="history.forward()">İleri ➡️</button>
                    </div>
                </body>
                </html>
                \`);
            }
        </script>
    </body>
    </html>
    `);
}

// Hakkında popup
function openAbout() {
    const aboutWindow = window.open("", "aboutPage", "width=600,height=800");
    aboutWindow.document.write(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>Hakkında</title>
      <style>
        body {
          background-color: #013220;
          color: #ffffff;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #c9fdd7;
          margin-bottom: 10px;
        }
        img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #c9fdd7;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.8;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .navigation-buttons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .navigation-buttons button {
            background-color: #014421;
            color: #c9fdd7;
            border: 2px solid #c9fdd7;
            border-radius: 8px;
            padding: 8px 20px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .navigation-buttons button:hover {
            background-color: #1d6b34;
        }
      </style>
    </head>
    <body>
      <h1>⚛ Hakkında ⚛</h1>
      <img src="https://raw.githubusercontent.com/omerfaruksirin/siir-sitesi/main/OmerFaruk.jpg" alt="Ömer Faruk Şirin">
      <p>
        Bu site Ömer Faruk'un gönlünden dökülen mânâları dijital bir yuvaya taşıyor.<br>
        Her bir dize ruhunuzda iz bırakacak...<br><br>
        Ömer Faruk Şirin, 16 Eylül 2000 tarihinde Sakarya'nın Adapazarı ilçesinde doğmuştur. 
        Çocukluk yıllarını Akyazı'da geçiren Ömer Faruk, lise eğitimine burada başlamış,
        daha sonra Adapazarı'nda devam etmiş ve liseyi açık öğretimle tamamlamıştır.<br><br>
        Ud çalmayı seven Ömer Faruk, duygularını şiir ve yazarlıkla dile getirmektedir. 
        Manevi ve derin bir iç dünyaya sahip olan Ömer Faruk, aynı zamanda "Eltek Mühendislik" adında bir şirketi yönetmektedir.
        Bu şirketle camilere yönelik projeler yürütmekte ve bu alanda çalışmalar yapmaktadır.
      </p>

      <div class="navigation-buttons">
          <button onclick="window.location.href='index.html'">⬅️ Ana Sayfa</button>
      </div>
    </body>
    </html>
    `);
}

// İletişim popup
function openContact() {
    const contactWindow = window.open("", "contactPage", "width=600,height=500");
    contactWindow.document.write(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>İletişim</title>
      <style>
        body {
          background-color: #013220;
          color: #ffffff;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #c9fdd7;
        }
        a {
          color: #c9fdd7;
          text-decoration: none;
          font-size: 1.3rem;
        }
        a:hover {
          text-decoration: underline;
          color: #27ae60;
        }
        .navigation-buttons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .navigation-buttons button {
            background-color: #014421;
            color: #c9fdd7;
            border: 2px solid #c9fdd7;
            border-radius: 8px;
            padding: 8px 20px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .navigation-buttons button:hover {
            background-color: #1d6b34;
        }
      </style>
    </head>
    <body>
      <h1>📬 İletişim</h1>
      <p>
        Instagram üzerinden ulaşabilirsiniz!<br><br>
        <a href="https://instagram.com/omrfsirin" target="_blank">https://instagram.com/omrfsirin</a>
      </p>

      <div class="navigation-buttons">
          <button onclick="window.location.href='index.html'">⬅️ Ana Sayfa</button>
      </div>
    </body>
    </html>
    `);
}
