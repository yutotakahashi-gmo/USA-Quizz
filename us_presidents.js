const usPresidents = [
  {
    number: 1,
    name: "George Washington",
    nameJa: "ジョージ・ワシントン",
    term: "1789–1797",
    party: "No Party",
    vicePresident: ["John Adams"],
    bornDied: "1732–1799",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg?width=240",
    keyEvents: [
      "Elected first president unanimously",
      "Established presidential precedents and cabinet system",
      "Led nation through Whiskey Rebellion",
      "Issued Proclamation of Neutrality during French wars",
      "Refused third term, establishing two-term tradition"
    ],
    summaryJa: "アメリカ建国の父として初代大統領を務めた。連邦政府の基礎を確立し、大統領の権限と責任を定義した。異党派の閣僚を任命し、国家統一を促進した。中立政策を通じてヨーロッパの戦争から身を引き、新興国を守った。",
    funFact: "入れ歯はハイポポタマス（カバ）の象牙から作られていた可能性がある。"
  },
  {
    number: 2,
    name: "John Adams",
    nameJa: "ジョン・アダムズ",
    term: "1797–1801",
    party: "Federalist",
    vicePresident: ["Thomas Jefferson"],
    bornDied: "1735–1826",
    birthplace: "Massachusetts",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_Presidential_portrait_of_John_Adams_(by_John_Trumbull%2C_circa_1792).jpg?width=240",
    keyEvents: [
      "Avoided war with France during Quasi-War",
      "Passed Alien and Sedition Acts",
      "Built up U.S. Navy and military",
      "Negotiated Treaty of Paris to prevent conflict",
      "Appointed Federalist judges before leaving office"
    ],
    summaryJa: "独立戦争の指導者として大統領に就任した。準戦争によるフランスとの紛争を回避し、海軍を拡大した。連邦政府の権力を強化したが、言論の自由制限で批判を受けた。ジェファーソンへの権力移譲は民主的実験の重要な段階となった。",
    funFact: "96歳で死去し、建国50周年の日に他の建国者たちと同日に亡くなった。"
  },
  {
    number: 3,
    name: "Thomas Jefferson",
    nameJa: "トマス・ジェファーソン",
    term: "1801–1809",
    party: "Democratic-Republican",
    vicePresident: ["Aaron Burr", "George Clinton"],
    bornDied: "1743–1826",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_Presidential_portrait_of_Thomas_Jefferson_(by_Rembrandt_Peale%2C_1800)(cropped).jpg?width=240",
    keyEvents: [
      "Louisiana Purchase doubled nation's territory",
      "Commissioned Lewis and Clark Expedition",
      "Reduced national debt significantly",
      "Defeated Barbary Pirates",
      "Imposed embargo on foreign trade"
    ],
    summaryJa: "独立宣言の起草者として知られ、民主主義的理想を掲げて大統領となった。ルイジアナ購入により領土を倍増させ、西部への膨張の基礎を築いた。中央政府の権力を削減し、農業を重視する政策を推し進めた。奴隷制度については矛盾した立場を示した。",
    funFact: "バージニア大学の創設者で、建築デザインも手がけた。"
  },
  {
    number: 4,
    name: "James Madison",
    nameJa: "ジェームズ・マディソン",
    term: "1809–1817",
    party: "Democratic-Republican",
    vicePresident: ["George Clinton", "Elbridge Gerry"],
    bornDied: "1751–1836",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Madison.jpg?width=240",
    keyEvents: [
      "Led nation during War of 1812",
      "Treaty of Ghent ended war with Britain",
      "Strengthened national defense",
      "Chartered Second Bank of the United States",
      "Monroe Doctrine precursor policies"
    ],
    summaryJa: "憲法の父として知られ、大統領就任時に若き国を率いた。1812年戦争でイギリスに対抗し、アメリカの独立を確保した。国内産業の発展を支援し、連邦政府の権力を拡大した。米英関係の再構築に成功した。",
    funFact: "妻ドロレスはホワイトハウスで社交の女性として知られ、大統領夫人の伝統を確立した。"
  },
  {
    number: 5,
    name: "James Monroe",
    nameJa: "ジェームズ・モンロー",
    term: "1817–1825",
    party: "Democratic-Republican",
    vicePresident: ["Daniel D. Tompkins"],
    bornDied: "1758–1831",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Monroe_White_House_portrait_1819.jpg?width=240",
    keyEvents: [
      "Proclaimed Monroe Doctrine against European intervention",
      "Acquired Florida from Spain",
      "Promoted Era of Good Feelings",
      "Missouri Compromise prevented sectional conflict",
      "Expanded trade and diplomatic relations"
    ],
    summaryJa: "モンロー・ドクトリンを宣言し、アメリカの世界的地位を確立した。ヨーロッパの干渉からラテンアメリカを守る立場を明確にした。内政では『良好感の時代』と呼ばれる統一と繁栄の時期をもたらした。スペインからフロリダを獲得した。",
    funFact: "独立戦争に参加した最後の大統領だった。"
  },
  {
    number: 6,
    name: "John Quincy Adams",
    nameJa: "ジョン・クインシー・アダムズ",
    term: "1825–1829",
    party: "Democratic-Republican",
    vicePresident: ["John C. Calhoun"],
    bornDied: "1767–1848",
    birthplace: "Massachusetts",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/JQA_Photo.tif?width=240",
    keyEvents: [
      "Won contested 1824 presidential election",
      "Promoted internal improvements and education",
      "Established Department of Interior policy",
      "Opposed expansion of slavery",
      "Later served in House of Representatives after presidency"
    ],
    summaryJa: "大統領に選ばれる前から政治的経歴が長く、国家改善計画を推進した。奴隷制度に反対し、道徳的指導者として行動した。党派的分裂の中で政治的孤立に直面した。大統領退職後も下院議員として活動し続けた。",
    funFact: "大統領後に下院議員に選ばれた唯一の元大統領である。"
  },
  {
    number: 7,
    name: "Andrew Jackson",
    nameJa: "アンドリュー・ジャクソン",
    term: "1829–1837",
    party: "Democratic",
    vicePresident: ["John C. Calhoun", "Martin Van Buren"],
    bornDied: "1767–1845",
    birthplace: "South Carolina",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Andrew_Jackson_head.jpg?width=240",
    keyEvents: [
      "Expanded executive power through presidential vetoes",
      "Opposed National Bank and removed federal deposits",
      "Indian Removal Act and Trail of Tears",
      "Resolved Nullification Crisis peacefully",
      "Patronage system and spoils system expansion"
    ],
    summaryJa: "一般人の大統領として登場し、大統領権限を大幅に拡大した。国立銀行に反対し、西部開拓を推進した。先住民政策は悲劇的で、多くの部族を強制移住させた。南北の対立で仲裁者的役割を果たした。",
    funFact: "暗殺未遂事件の唯一の生存者で、銃撃を受けても攻撃者に対して杖で反撃した。"
  },
  {
    number: 8,
    name: "Martin Van Buren",
    nameJa: "マーティン・ヴァン・ビューレン",
    term: "1837–1841",
    party: "Democratic",
    vicePresident: ["Richard Mentor Johnson"],
    bornDied: "1782–1862",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Van_Buren_edit.jpg?width=240",
    keyEvents: [
      "Dealt with severe economic panic of 1837",
      "Opposed expansion of slavery",
      "Supported Indian removal policies",
      "Promoted Democratic party organization",
      "Subtreasury system for federal funds"
    ],
    summaryJa: "ジャクソンの後継者として経済危機の中で大統領となった。大恐慌により再選されず、政治的影響力を失った。奴隷制度に対する立場は複雑で、政治的利益と道徳的立場の間で揺らいだ。",
    funFact: "アメリカで生まれた最初の大統領だった。"
  },
  {
    number: 9,
    name: "William Henry Harrison",
    nameJa: "ウィリアム・ヘンリー・ハリソン",
    term: "1841",
    party: "Whig",
    vicePresident: ["John Tyler"],
    bornDied: "1773–1841",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Henry_Harrison_daguerreotype_edit.jpg?width=240",
    keyEvents: [
      "Elected on log cabin campaign",
      "Died after 31 days in office from pneumonia",
      "Longest inaugural address in U.S. history"
    ],
    summaryJa: "最短の在任期間（31日）で就任後に死亡した。インディアン戦争での軍事的経歴に基づいて選ばれた。就任演説は最も長く、政治的ビジョンを詳述したが、実行する機会を得られなかった。",
    funFact: "当時最年長で就任した大統領だった（その記録は1981年まで破られなかった）。"
  },
  {
    number: 10,
    name: "John Tyler",
    nameJa: "ジョン・タイラー",
    term: "1841–1845",
    party: "Whig",
    vicePresident: [],
    bornDied: "1790–1862",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Tyler_daguerreotype_(restoration).jpg?width=240",
    keyEvents: [
      "First vice president to assume presidency on death",
      "Annexed Texas as state",
      "Promoted states' rights",
      "Opposed Whig Party measures",
      "Established vice presidential succession precedent"
    ],
    summaryJa: "副大統領から昇格した初の大統領として、大統領権限を確立した。テキサスの併合を推進し、領土拡張を実現した。Whig党と対立しながら独立的に政策を遂行した。南部的な価値観を代弁した。",
    funFact: "大統領退職後、南部同盟の下院議員に選ばれた唯一の元大統領である。"
  },
  {
    number: 11,
    name: "James K. Polk",
    nameJa: "ジェームズ・ノックス・ポーク",
    term: "1845–1849",
    party: "Democratic",
    vicePresident: ["George M. Dallas"],
    bornDied: "1795–1849",
    birthplace: "North Carolina",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Knox_Polk_by_GPA_Healy%2C_1858.jpg?width=240",
    keyEvents: [
      "Led nation during Mexican-American War",
      "Expanded territory through Mexican cession",
      "Acquired Oregon Territory through compromise",
      "Promoted Manifest Destiny expansion",
      "Won all campaign pledges in single term"
    ],
    summaryJa: "米墨戦争を指揮し、アメリカの領土を大幅に拡大した。テキサス、ニューメキシコ、カリフォルニアを獲得した。オレゴン領土を分割して獲得した。領土拡張は奴隷制度の拡大問題を激化させた。",
    funFact: "1期4年で全公約を実現した強い指導者だった。"
  },
  {
    number: 12,
    name: "Zachary Taylor",
    nameJa: "ザカリー・テイラー",
    term: "1849–1850",
    party: "Whig",
    vicePresident: ["Millard Fillmore"],
    bornDied: "1784–1850",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Zachary_Taylor_restored_and_cropped.jpg?width=240",
    keyEvents: [
      "Elected on military fame without political experience",
      "Opposed slavery expansion despite owning slaves",
      "Died after 16 months in office",
      "Opposed Compromise of 1850",
      "Constitutional crisis left unresolved"
    ],
    summaryJa: "職業軍人から大統領に転身した。奴隷制度拡張に反対し、南部を敵に回した。在任中に突然死亡し、危機を解決できなかった。政治経験の欠如が国家分裂の深刻化につながった。",
    funFact: "急激な腹痛で死亡し、コレラと考えられたが、真の原因は不明である。"
  },
  {
    number: 13,
    name: "Millard Fillmore",
    nameJa: "ミラード・フィルモア",
    term: "1850–1853",
    party: "Whig",
    vicePresident: [],
    bornDied: "1800–1874",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Millard_Fillmore_daguerreotype_by_Mathew_Brady%2C_c1850.jpg?width=240",
    keyEvents: [
      "Assumed presidency following Taylor's death",
      "Signed Compromise of 1850",
      "Supported Fugitive Slave Act",
      "Opened trade with Japan",
      "Faced party dissolution"
    ],
    summaryJa: "副大統領から昇格し、南北の対立を調停しようとした。1850年の妥協案に署名し、奴隷制度の拡張に同意した。北部の反発を招き、党の分裂を加速させた。日本との貿易関係を開始した。",
    funFact: "最後のWhig党大統領で、Know Nothing党の大統領候補となった。"
  },
  {
    number: 14,
    name: "Franklin Pierce",
    nameJa: "フランクリン・ピアース",
    term: "1853–1857",
    party: "Democratic",
    vicePresident: ["William R. King"],
    bornDied: "1804–1869",
    birthplace: "New Hampshire",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathew_Brady%2C_Portrait_of_Franklin_Pierce%2C_fourteenth_President_of_the_United_States%2C_from_between_1855_and_1865-crop.jpg?width=240",
    keyEvents: [
      "Kansas-Nebraska Act increased sectional tensions",
      "Gadsden Purchase expanded territory",
      "Attempted to purchase Cuba from Spain",
      "Kansas-Nebraska violence and bleeding Kansas",
      "Failed to prevent Civil War"
    ],
    summaryJa: "カンザス・ネブラスカ法により奴隷制度拡張を容認し、北部の怒りを招いた。領土拡張を求めたが、外交的失敗に終わった。南北戦争へ向かう分裂を止められず、最も失敗した大統領の一人とされる。",
    funFact: "メキシコからガズデン地域を購入し、南部の領土野心を満たした。"
  },
  {
    number: 15,
    name: "James Buchanan",
    nameJa: "ジェームズ・ブキャナン",
    term: "1857–1861",
    party: "Democratic",
    vicePresident: ["John C. Breckinridge"],
    bornDied: "1791–1868",
    birthplace: "Pennsylvania",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Buchanan.jpg?width=240",
    keyEvents: [
      "Failed to prevent Southern secession",
      "Dred Scott decision undermined slavery opposition",
      "Lincoln's election triggered secession crisis",
      "Inaction during national emergency",
      "Criticized for weak leadership before Civil War"
    ],
    summaryJa: "南北戦争前夜に無行動のまま大統領を務めた。南部の離脱を止められず、国家の危機に対応できなかった。後世では最悪の大統領と評価されることが多い。強い指導力を発揮できなかった。",
    funFact: "独身で、姪が大統領夫人の役割を果たした。"
  },
  {
    number: 16,
    name: "Abraham Lincoln",
    nameJa: "エイブラハム・リンカーン",
    term: "1861–1865",
    party: "Republican",
    vicePresident: ["Hannibal Hamlin", "Andrew Johnson"],
    bornDied: "1809–1865",
    birthplace: "Kentucky",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Abraham_Lincoln_O-77_matte_collodion_print.jpg?width=240",
    keyEvents: [
      "Led nation through Civil War",
      "Emancipation Proclamation freed enslaved people",
      "Gettysburg Address redefined national purpose",
      "Preserved the Union",
      "Assassinated by John Wilkes Booth"
    ],
    summaryJa: "南北戦争を指導し、400万人以上の奴隷を解放した。奴隷制度を廃止し、国家を再統一した。ゲティスバーグ演説で民主主義の理想を語った。暗殺により国家統一の完成を見ずに逝去した。",
    funFact: "6フィート4インチという当時としては非常に背の高い大統領だった。"
  },
  {
    number: 17,
    name: "Andrew Johnson",
    nameJa: "アンドリュー・ジョンソン",
    term: "1865–1869",
    party: "Democratic",
    vicePresident: [],
    bornDied: "1808–1875",
    birthplace: "North Carolina",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Andrew_Johnson.jpg?width=240",
    keyEvents: [
      "Assumed presidency following Lincoln's assassination",
      "Pursued lenient Reconstruction policies",
      "Impeached but acquitted by one vote",
      "Opposed Republican Reconstruction measures",
      "Attempted to restore Southern power"
    ],
    summaryJa: "リンカーンの死後、寛容な再建政策を推し進めた。議会の過激派共和党と対立し、弾劾されたが1票差で無罪となった。南部への厳しい措置に反対し、南部貴族の権力回復を許した。",
    funFact: "弾劾された最初の大統領だが、無罪となった。"
  },
  {
    number: 18,
    name: "Ulysses S. Grant",
    nameJa: "ユリシーズ・シンプソン・グラント",
    term: "1869–1877",
    party: "Republican",
    vicePresident: ["Schuyler Colfax", "Henry Wilson"],
    bornDied: "1822–1885",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Ulysses_S._Grant_1870-1880.jpg?width=240",
    keyEvents: [
      "Enforced Reconstruction policies in South",
      "Fought Ku Klux Klan violence",
      "Protected voting rights of freedmen",
      "Era of corruption and scandals",
      "Preserved Union after Civil War"
    ],
    summaryJa: "南北戦争の将軍として大統領に登場した。激進的な再建政策を支持し、黒人の権利を保護した。KKK暴力に対抗した。任期中の汚職スキャンダルが多く、指導力に疑問が生じた。",
    funFact: "タバコの喫煙癖が知られており、多くの肖像画で喫煙している。"
  },
  {
    number: 19,
    name: "Rutherford B. Hayes",
    nameJa: "ラザフォード・バーチャード・ヘイズ",
    term: "1877–1881",
    party: "Republican",
    vicePresident: ["William A. Wheeler"],
    bornDied: "1822–1893",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Rutherford_Hayes_1870_-_1880_Restored.jpg?width=240",
    keyEvents: [
      "Won disputed 1876 election by one electoral vote",
      "Ended Reconstruction through Compromise of 1877",
      "Withdrew federal troops from South",
      "Promoted civil service reform",
      "Railroad strike violence in 1877"
    ],
    summaryJa: "争点となった1876年大統領選挙に勝利した。再建を終わらせるため南部から連邦軍を撤退させた。これにより黒人の権利が失われた。公務員改革を推進した。",
    funFact: "大統領退職後、教育と慈善事業に力を注いだ。"
  },
  {
    number: 20,
    name: "James A. Garfield",
    nameJa: "ジェームズ・アブラム・ガーフィールド",
    term: "1881",
    party: "Republican",
    vicePresident: ["Chester A. Arthur"],
    bornDied: "1831–1881",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Abram_Garfield%2C_photo_portrait_seated.jpg?width=240",
    keyEvents: [
      "Elected after contentious convention",
      "Assassinated after 200 days in office",
      "Shot by Charles Guiteau over patronage",
      "Sparked civil service reform movement"
    ],
    summaryJa: "公務員改革を目指して就任したが、獲得できなかった職位について不満を持つ者に暗殺された。在任期間は4番目に短かった。彼の死は公務員改革の必要性を明確にした。",
    funFact: "両利きで、ギリシャ語とラテン語が堪能だった。"
  },
  {
    number: 21,
    name: "Chester A. Arthur",
    nameJa: "チェスター・アラン・アーサー",
    term: "1881–1885",
    party: "Republican",
    vicePresident: [],
    bornDied: "1829–1886",
    birthplace: "Vermont",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Chester_Alan_Arthur.jpg?width=240",
    keyEvents: [
      "Assumed presidency following Garfield's assassination",
      "Pursued civil service reform despite patronage background",
      "Pendleton Civil Service Act modernized federal system",
      "Reformed naval fleet",
      "Faced party opposition to reform measures"
    ],
    summaryJa: "ガーフィールド暗殺後の副大統領から昇格した。意外にも改革派となり、公務員改革を主導した。ペンドルトン法を署名し、メリット制度を確立した。政治的腐敗に対抗した。",
    funFact: "ファッション感覚に優れており、『最もおしゃれな大統領』と呼ばれた。"
  },
  {
    number: 22,
    name: "Grover Cleveland",
    nameJa: "グロバー・クリーブランド",
    term: "1885–1889",
    party: "Democratic",
    vicePresident: ["Thomas A. Hendricks"],
    bornDied: "1837–1908",
    birthplace: "New Jersey",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/StephenGroverCleveland.jpg?width=240",
    keyEvents: [
      "Fought government patronage and corruption",
      "Vetoed hundreds of bills",
      "Interstate Commerce Commission created",
      "Managed economic issues",
      "Strongly opposed protective tariffs"
    ],
    summaryJa: "改革派の民主党大統領として登場し、政府の腐敗に対抗した。保護主義的関税に反対し、自由貿易を推し進めた。経済危機に直面し、評判を落とした。廉潔性と原則を重視した。",
    funFact: "2度大統領を務めた唯一の人物で、2つの異なる任期がある。"
  },
  {
    number: 23,
    name: "Benjamin Harrison",
    nameJa: "ベンジャミン・ハリソン",
    term: "1889–1893",
    party: "Republican",
    vicePresident: ["Levi P. Morton"],
    bornDied: "1833–1901",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pach_Brothers_-_Benjamin_Harrison.jpg?width=240",
    keyEvents: [
      "McKinley Tariff protected American industry",
      "Sherman Antitrust Act first antitrust law",
      "Expanded American navy and naval bases",
      "Supported business interests",
      "Economic Panic of 1893 during tenure"
    ],
    summaryJa: "保護主義的な政策を進め、アメリカ産業を支援した。シャーマン反トラスト法を署名し、独占企業に対抗した。帝国主義的政策を推し進め、海軍を拡大した。経済危機に直面した。",
    funFact: "ウィリアム・ヘンリー・ハリソン大統領の孫である。"
  },
  {
    number: 24,
    name: "Grover Cleveland",
    nameJa: "グロバー・クリーブランド",
    term: "1893–1897",
    party: "Democratic",
    vicePresident: ["Adlai E. Stevenson I"],
    bornDied: "1837–1908",
    birthplace: "New Jersey",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/StephenGroverCleveland.jpg?width=240",
    keyEvents: [
      "Dealt with severe economic Panic of 1893",
      "Called for repeal of Sherman Silver Purchase Act",
      "Suppressed Pullman railroad strike violently",
      "Faced record unemployment",
      "Gold standard maintained despite pressure"
    ],
    summaryJa: "大恐慌と呼ばれる1893年経済危機に直面した。失業率は高く、国民の苦しみは深刻だった。プルマン罪争で労働者弾圧を指揮した。金本位制を守るため政策は批判された。",
    funFact: "2度の任期の間に別の大統領がいるため、22番目と24番目の大統領である。"
  },
  {
    number: 25,
    name: "William McKinley",
    nameJa: "ウィリアム・マッキンリー",
    term: "1897–1901",
    party: "Republican",
    vicePresident: ["Garret Hobart", "Theodore Roosevelt"],
    bornDied: "1843–1901",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mckinley.jpg?width=240",
    keyEvents: [
      "Led nation during Spanish-American War",
      "Acquired Cuba, Guam, and Puerto Rico",
      "Annexed Hawaii and Philippines",
      "Promoted American imperialism",
      "Assassinated by Leon Czolgosz"
    ],
    summaryJa: "米西戦争を指揮し、アメリカの帝国主義的拡張を推し進めた。フィリピンとキューバを獲得した。保護主義的政策で経済を保護した。暗殺によって任期を終えた。",
    funFact: "3番目に暗殺された大統領だった。"
  },
  {
    number: 26,
    name: "Theodore Roosevelt",
    nameJa: "セオドア・ルーズベルト",
    term: "1901–1909",
    party: "Republican",
    vicePresident: ["Charles W. Fairbanks"],
    bornDied: "1858–1919",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Theodore_Roosevelt%2C_1904.jpg?width=240",
    keyEvents: [
      "Trust-busting against monopolies",
      "Secured Panama Canal rights",
      "Won Nobel Peace Prize for negotiations",
      "Expanded executive power",
      "Progressive conservation movement leadership"
    ],
    summaryJa: "帝国主義的外交を推し進め、アメリカを世界大国に導いた。パナマ運河の建設権を取得した。独占企業に対抗し、消費者保護を推進した。自然保護に力を入れた。活動的で充実した大統領だった。",
    funFact: "副大統領から昇格した最年少の大統領だった（当時42歳）。"
  },
  {
    number: 27,
    name: "William Howard Taft",
    nameJa: "ウィリアム・ハワード・タフト",
    term: "1909–1913",
    party: "Republican",
    vicePresident: ["James S. Sherman"],
    bornDied: "1857–1930",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Howard_Taft_-_Harris_and_Ewing.jpg?width=240",
    keyEvents: [
      "Pursued trust-busting more aggressively than Roosevelt",
      "Payne-Aldrich Tariff increased tensions",
      "Conservation disputes with progressives",
      "Later served as Chief Justice of Supreme Court",
      "Republican Party split with Roosevelt"
    ],
    summaryJa: "ルーズベルトの後継者として実質的により多くの企業を訴追した。しかし進歩派との対立が生じた。関税問題で党内分裂を招いた。大統領退職後は最高裁判事となった。",
    funFact: "大統領であり最高裁判事を務めた唯一の人物である。"
  },
  {
    number: 28,
    name: "Woodrow Wilson",
    nameJa: "ウッドロー・ウィルソン",
    term: "1913–1921",
    party: "Democratic",
    vicePresident: ["Thomas R. Marshall"],
    bornDied: "1856–1924",
    birthplace: "Virginia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919.jpg?width=240",
    keyEvents: [
      "Led nation through World War I",
      "Promoted League of Nations",
      "Progressive domestic reforms",
      "Federal Reserve System created",
      "Suffered stroke limiting final years"
    ],
    summaryJa: "第1次世界大戦でアメリカを導いた。理想主義的な外交政策を推し進めた。国際連盟の創設を目指したが、米国の批准は得られなかった。進歩的改革を推し進めた。脳卒中後は指導力が低下した。",
    funFact: "プリンストン大学の学長を務めた後、大統領となった。"
  },
  {
    number: 29,
    name: "Warren G. Harding",
    nameJa: "ウォーレン・ガマリエル・ハーディング",
    term: "1921–1923",
    party: "Republican",
    vicePresident: ["Calvin Coolidge"],
    bornDied: "1865–1923",
    birthplace: "Ohio",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Warren_G_Harding-Harris_%26_Ewing.jpg?width=240",
    keyEvents: [
      "Elected on 'return to normalcy' platform",
      "Teapot Dome oil scandal",
      "Died in office under mysterious circumstances",
      "Cabinet corruption revealed posthumously",
      "Limited foreign policy engagement"
    ],
    summaryJa: "ウィルソンの理想主義から保守的政策への転換を図った。ティーポット・ドーム・スキャンダルで腐敗が明るみに出た。在任中に急死した。復興期のアメリカを指導した。",
    funFact: "在任中に死亡した最後の大統領だった。"
  },
  {
    number: 30,
    name: "Calvin Coolidge",
    nameJa: "カルビン・クーリッジ",
    term: "1923–1929",
    party: "Republican",
    vicePresident: ["Charles G. Dawes"],
    bornDied: "1872–1933",
    birthplace: "Vermont",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Calvin_Coolidge%2C_bw_head_and_shoulders_photo_portrait_seated%2C_1919.jpg?width=240",
    keyEvents: [
      "Assumed presidency after Harding's death",
      "Promoted laissez-faire capitalism",
      "Roaring Twenties economic expansion",
      "Honored Harding's memory and cleaned up scandals",
      "Did not seek another term"
    ],
    summaryJa: "ハーディングの死後、落ち着きのある指導で国家を安定させた。ビジネス重視の政策を推し進めた。1920年代の好況を象徴した。スキャンダルを整理した。",
    funFact: "寡黙で知られており、『沈黙の大統領』と呼ばれた。"
  },
  {
    number: 31,
    name: "Herbert Hoover",
    nameJa: "ハーバート・クラーク・フーバー",
    term: "1929–1933",
    party: "Republican",
    vicePresident: ["Charles Curtis"],
    bornDied: "1874–1964",
    birthplace: "Iowa",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Hoover_portrait.jpg?width=240",
    keyEvents: [
      "Took office before Great Depression crash",
      "Stock market collapsed in October 1929",
      "Limited government intervention response",
      "Bonus Army incident in Washington",
      "Great Depression deepened during tenure"
    ],
    summaryJa: "就任直後の1929年に大恐慌が始まった。政府の積極的介入に反対し、市場自動調整を信じた。失業と貧困が増大した。大統領退職後も慈善活動に従事した。",
    funFact: "フーバー大統領はエンジニアであり、多くの国際関係構築に貢献した。"
  },
  {
    number: 32,
    name: "Franklin D. Roosevelt",
    nameJa: "フランクリン・デラノ・ルーズベルト",
    term: "1933–1945",
    party: "Democratic",
    vicePresident: ["John Nance Garner", "Henry A. Wallace", "Harry S. Truman"],
    bornDied: "1882–1945",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/FDR_1944_Color_Portrait.tif?width=240",
    keyEvents: [
      "New Deal programs combated Great Depression",
      "Led nation through World War II",
      "Social Security and labor reforms",
      "Four terms as president",
      "Died in office before war's end"
    ],
    summaryJa: "大恐慌から国家を救うニューディール政策を展開した。第2次世界大戦でアメリカを勝利に導いた。社会保障制度を創設した。身障者ながら指導力を示した。在任中に死亡した。",
    funFact: "小児麻痺で両足が不自由だったが、国民に知られていなかった。"
  },
  {
    number: 33,
    name: "Harry S. Truman",
    nameJa: "ハリー・S・トルーマン",
    term: "1945–1953",
    party: "Democratic",
    vicePresident: ["Alben W. Barkley"],
    bornDied: "1884–1972",
    birthplace: "Missouri",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry_S._Truman_-_NARA_-_530677_(cropped).jpg?width=240",
    keyEvents: [
      "Assumed presidency after FDR's death",
      "Authorized atomic bombings of Japan",
      "Implemented Truman Doctrine against Soviet expansion",
      "Korean War leadership",
      "Fair Deal domestic programs"
    ],
    summaryJa: "第2次世界大戦の終結を指揮した。日本への原爆投下を決定した。トルーマン・ドクトリンで冷戦政策を確立した。朝鮮戦争に対応した。公正な取引を推進した。",
    funFact: "副大統領はわずか82日で大統領に昇格した。"
  },
  {
    number: 34,
    name: "Dwight D. Eisenhower",
    nameJa: "ドワイト・デイビッド・アイゼンハワー",
    term: "1953–1961",
    party: "Republican",
    vicePresident: ["Richard Nixon"],
    bornDied: "1890–1969",
    birthplace: "Texas",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg?width=240",
    keyEvents: [
      "Korean War armistice achieved",
      "Interstate Highway System created",
      "Cold War détente efforts",
      "Farewell warning on military-industrial complex",
      "Civil Rights progress initiated"
    ],
    summaryJa: "第2次世界大戦の将軍として大統領となった。朝鮮戦争を終わらせた。州間高速道路システムを建設した。冷戦期間の安定した指導を行った。軍産複合体への警告を発した。",
    funFact: "ゴルフ愛好家で知られており、大統領任期中に200回以上ラウンドした。"
  },
  {
    number: 35,
    name: "John F. Kennedy",
    nameJa: "ジョン・フィッツジェラルド・ケネディ",
    term: "1961–1963",
    party: "Democratic",
    vicePresident: ["Lyndon B. Johnson"],
    bornDied: "1917–1963",
    birthplace: "Massachusetts",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg?width=240",
    keyEvents: [
      "Bay of Pigs invasion",
      "Cuban Missile Crisis brinkmanship",
      "Civil Rights advocacy",
      "Space program acceleration",
      "Assassinated in Dallas, Texas"
    ],
    summaryJa: "アメリカで最年少の大統領として就任した。キューバ危機で核戦争を回避した。公民権運動を支持した。月面着陸計画を推進した。暗殺により任期を終えた。",
    funFact: "当選時点でアメリカ初のカトリック教徒大統領だった。"
  },
  {
    number: 36,
    name: "Lyndon B. Johnson",
    nameJa: "リンドン・ベインズ・ジョンソン",
    term: "1963–1969",
    party: "Democratic",
    vicePresident: ["Hubert Humphrey"],
    bornDied: "1908–1973",
    birthplace: "Texas",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/37_Lyndon_Johnson_3x4.jpg?width=240",
    keyEvents: [
      "Great Society domestic programs",
      "Civil Rights Act and Voting Rights Act",
      "Vietnam War escalation",
      "Medicare and Medicaid created",
      "Declined to run for reelection"
    ],
    summaryJa: "ケネディの死後、大社会計画で貧困に対抗した。公民権法を署名した。メディケアとメディケイドを創設した。ベトナム戦争の拡大を指揮した。国内分裂のため再選出馬を断った。",
    funFact: "テキサス州出身で、西部風の大統領として知られた。"
  },
  {
    number: 37,
    name: "Richard Nixon",
    nameJa: "リチャード・ニクソン",
    term: "1969–1974",
    party: "Republican",
    vicePresident: ["Spiro Agnew", "Gerald Ford"],
    bornDied: "1913–1994",
    birthplace: "California",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Richard_M._Nixon%2C_ca._1935_-_1982_-_NARA_-_530679.jpg?width=240",
    keyEvents: [
      "Détente with Soviet Union",
      "China diplomatic recognition",
      "Vietnam War Vietnamization",
      "Watergate scandal and cover-up",
      "Resigned before impeachment"
    ],
    summaryJa: "冷戦の緩和を進め、中国との国交を樹立した。ベトナム戦争の終結を段階的に進めた。ウォーターゲート事件で弾劾を避けるため辞任した。政治的陰謀で有名である。",
    funFact: "弾劾を避けるために辞任した唯一の大統領だった。"
  },
  {
    number: 38,
    name: "Gerald Ford",
    nameJa: "ジェラルド・フォード",
    term: "1974–1977",
    party: "Republican",
    vicePresident: ["Nelson Rockefeller"],
    bornDied: "1913–2006",
    birthplace: "Nebraska",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Gerald_Ford_presidential_portrait_(cropped).jpg?width=240",
    keyEvents: [
      "Assumed presidency after Nixon's resignation",
      "Pardoned Nixon controversially",
      "Vietnam War ended",
      "Helsinki Accords negotiated",
      "Stabilized government after crisis"
    ],
    summaryJa: "副大統領から昇格した唯一の大統領となった。ニクソンを恩赦し、国家の癒やしを目指した。ベトナム戦争の終結を見守った。ウォーターゲート後の信頼回復を努めた。",
    funFact: "選挙で選ばれたことのない唯一の大統領だった。"
  },
  {
    number: 39,
    name: "Jimmy Carter",
    nameJa: "ジミー・カーター",
    term: "1977–1981",
    party: "Democratic",
    vicePresident: ["Walter Mondale"],
    bornDied: "1924–",
    birthplace: "Georgia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/JimmyCarterPortrait_(cropped).jpg?width=240",
    keyEvents: [
      "Camp David Accords for Middle East peace",
      "Iranian hostage crisis",
      "Soviet invasion of Afghanistan response",
      "Energy crisis management",
      "Panama Canal Treaties negotiated"
    ],
    summaryJa: "核技術者として技術的知識を持つ大統領だった。キャンプデービッド合意で中東平和を目指した。イラン人質事件で批判を受けた。アフガニスタン侵攻に対抗した。大統領退職後も人道的活動を続けた。",
    funFact: "大統領退職後も最も活動的で、ハビタット・フォー・ヒューマニティを支援した。"
  },
  {
    number: 40,
    name: "Ronald Reagan",
    nameJa: "ロナルド・レーガン",
    term: "1981–1989",
    party: "Republican",
    vicePresident: ["George H. W. Bush"],
    bornDied: "1911–2004",
    birthplace: "Illinois",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_Portrait_of_President_Reagan_1981.jpg?width=240",
    keyEvents: [
      "Reagan Revolution conservative policies",
      "Soviet Union Cold War confrontation",
      "Tax cuts and deregulation",
      "Strategic Defense Initiative announced",
      "Iran-Contra affair scandal"
    ],
    summaryJa: "保守革命として知られる右翼政策を推し進めた。減税とビジネス規制撤廃を実行した。ソビエト連邦への強硬姿勢を取った。冷戦の緩和に貢献した。任期後期にアルツハイマーを発症した。",
    funFact: "ハリウッドの映画俳優から大統領になった。"
  },
  {
    number: 41,
    name: "George H. W. Bush",
    nameJa: "ジョージ・ハーバート・ウォーカー・ブッシュ",
    term: "1989–1993",
    party: "Republican",
    vicePresident: ["Dan Quayle"],
    bornDied: "1924–2018",
    birthplace: "Massachusetts",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/George_H._W._Bush_presidential_portrait_(cropped).jpg?width=240",
    keyEvents: [
      "Gulf War victory over Iraq",
      "Soviet Union collapse and Cold War end",
      "Coalition building for international cooperation",
      "Savings and Loan crisis resolution",
      "No new taxes pledge violation"
    ],
    summaryJa: "冷戦の終結を見守った。湾岸戦争でイラクに対抗した。国際的な連携を重視した。減税公約を破り、政治的ダメージを受けた。外交に重点を置いた大統領だった。",
    funFact: "CIA長官を務めた後、副大統領を経て大統領となった。"
  },
  {
    number: 42,
    name: "Bill Clinton",
    nameJa: "ビル・クリントン",
    term: "1993–2001",
    party: "Democratic",
    vicePresident: ["Al Gore"],
    bornDied: "1946–",
    birthplace: "Arkansas",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Bill_Clinton.jpg?width=240",
    keyEvents: [
      "NAFTA trade agreement",
      "Economic prosperity and budget surplus",
      "Lewinsky scandal and impeachment",
      "Balkan interventions",
      "Anti-terrorism efforts"
    ],
    summaryJa: "1990年代の経済的繁栄を導いた。NAFTA貿易協定を成立させた。モニカ・ルインスキー事件で弾劾されたが無罪となった。バルカン紛争に介入した。テロ対策に力を入れた。",
    funFact: "大統領退職後もビルダーバーグミーティングや国際会議で活動を続けている。"
  },
  {
    number: 43,
    name: "George W. Bush",
    nameJa: "ジョージ・ウォーカー・ブッシュ",
    term: "2001–2009",
    party: "Republican",
    vicePresident: ["Dick Cheney"],
    bornDied: "1946–",
    birthplace: "Connecticut",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/George-W-Bush.jpeg?width=240",
    keyEvents: [
      "September 11 terrorist attacks response",
      "War on Terror launched",
      "Afghanistan invasion",
      "Iraq War based on WMD claims",
      "Financial crisis of 2008"
    ],
    summaryJa: "9・11テロ攻撃後、対テロ戦争を宣言した。アフガニスタンとイラクに軍事介入した。大量破壊兵器の根拠が疑問視された。金融危機に直面した。保守的外交政策を推し進めた。",
    funFact: "フロリダ州での選挙争点が最高裁の判断に委ねられた。"
  },
  {
    number: 44,
    name: "Barack Obama",
    nameJa: "バラク・フセイン・オバマ",
    term: "2009–2017",
    party: "Democratic",
    vicePresident: ["Joe Biden"],
    bornDied: "1961–",
    birthplace: "Hawaii",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/President_Barack_Obama.jpg?width=240",
    keyEvents: [
      "Affordable Care Act passed",
      "Great Recession recovery efforts",
      "Bin Laden killed in raid",
      "Iran nuclear agreement",
      "Trans-Pacific Partnership negotiations"
    ],
    summaryJa: "アメリカ初のアフリカ系大統領として歴史的意義を持つ。医療改革（オバマケア）を成立させた。不況からの回復を指導した。テロ対策を継続した。イラン核合意を交渉した。",
    funFact: "シカゴコミュニティ活動家から大統領に昇進した異例の経歴がある。"
  },
  {
    number: 45,
    name: "Donald Trump",
    nameJa: "ドナルド・ジョン・トランプ",
    term: "2017–2021",
    party: "Republican",
    vicePresident: ["Mike Pence"],
    bornDied: "1946–",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Donald_Trump_official_portrait.jpg?width=240",
    keyEvents: [
      "Tax Cuts and Jobs Act passed",
      "Trade war with China",
      "Supreme Court appointments",
      "First impeachment for abuse of power",
      "Second impeachment for incitement to insurrection"
    ],
    summaryJa: "不動産ビジネスマンから大統領となった異例の候補だった。税制改革と脱規制を推し進めた。中国との貿易紛争を開始した。最高裁判官3人を任命した。2度弾劾されたが無罪となった。",
    funFact: "ソーシャルメディアを活発に使用して国民と直接コミュニケーションを取った。"
  },
  {
    number: 46,
    name: "Joe Biden",
    nameJa: "ジョセフ・ロビネット・バイデン・ジュニア",
    term: "2021–2025",
    party: "Democratic",
    vicePresident: ["Kamala Harris"],
    bornDied: "1942–",
    birthplace: "Pennsylvania",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Joe_Biden_presidential_portrait.jpg?width=240",
    keyEvents: [
      "COVID-19 pandemic response",
      "Afghanistan withdrawal",
      "Ukraine support against Russian invasion",
      "Inflation management efforts",
      "Bipartisan infrastructure investment"
    ],
    summaryJa: "オバマ前大統領の副大統領として経験を積んだ。パンデミック対応に取り組んだ。ウクライナのロシア侵攻に対抗し、NATO同盟国を結集させた。インフラ投資法を成立させた。高齢の大統領として就任した。",
    funFact: "最年長で就任した大統領である。"
  },
  {
    number: 47,
    name: "Donald Trump",
    nameJa: "ドナルド・ジョン・トランプ",
    term: "2025–",
    party: "Republican",
    vicePresident: ["JD Vance"],
    bornDied: "1946–",
    birthplace: "New York",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Donald_Trump_official_portrait.jpg?width=240",
    keyEvents: [
      "Second non-consecutive presidential term",
      "Return to America First policies",
      "Tariff and trade policy implementation",
      "Judicial appointments continued",
      "Energy independence promotion"
    ],
    summaryJa: "2度目の非連続的な任期で大統領に返り咲いた。アメリカ優先政策を再度推し進めた。関税と貿易政策を重視している。司法任命を継続している。エネルギー独立を目指している。",
    funFact: "米国史上、2回目の非連続的な任期を務める唯一の大統領である。"
  }
];
