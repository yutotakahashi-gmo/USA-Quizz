const americaTimeline = [
  // 植民地時代 (Colonial Era, 1492-1775)
  {
    year: "1492",
    event: "Columbus reaches the Americas",
    eventJa: "コロンブスがアメリカ大陸に到達。ヨーロッパによるアメリカ大陸の探検と征服の時代が始まる。",
    era: "植民地時代",
    keywords: ["Columbus", "exploration", "discovery"]
  },
  {
    year: "1497",
    event: "John Cabot explores North America",
    eventJa: "ジョン・キャボットがイギリスの支援でカナダ沿岸を探検。イギリスの北米領土要求の根拠となる。",
    era: "植民地時代",
    keywords: ["Cabot", "exploration", "England"]
  },
  {
    year: "1565",
    event: "Saint Augustine founded",
    eventJa: "スペイン人がセントオーガスティンを建設。現在のアメリカ合衆国領土内で最古のヨーロッパ人定住地。",
    era: "植民地時代",
    keywords: ["Saint Augustine", "Spain", "settlement"]
  },
  {
    year: "1607",
    event: "Jamestown Colony established",
    eventJa: "ジェームズタウンがヴァージニア州に建設された。イギリスの北米植民地の第一号で、アメリカ合衆国発展の基礎となる。",
    era: "植民地時代",
    keywords: ["Jamestown", "Virginia", "settlement", "England"]
  },
  {
    year: "1620",
    event: "Mayflower arrives at Plymouth",
    eventJa: "ピューリタンを含む清教徒たちがメイフラワー号で到着。宗教の自由を求めた移民の象徴となる。",
    era: "植民地時代",
    keywords: ["Mayflower", "Pilgrims", "Plymouth", "settlement"]
  },
  {
    year: "1626",
    event: "Manhattan purchased from Native Americans",
    eventJa: "オランダ人がネイティブアメリカンからマンハッタンを購入。ニューアムステルダムが建設され、後のニューヨークとなる。",
    era: "植民地時代",
    keywords: ["Manhattan", "New Amsterdam", "New York"]
  },
  {
    year: "1638",
    event: "Harvard College founded",
    eventJa: "ハーバード大学が創設される。アメリカで最初の高等教育機関。",
    era: "植民地時代",
    keywords: ["Harvard", "education", "university"]
  },
  {
    year: "1664",
    event: "English take control of New Amsterdam",
    eventJa: "イギリスがオランダからニューアムステルダムを奪取。ニューヨークに改名され、イギリス領となる。",
    era: "植民地時代",
    keywords: ["New Amsterdam", "New York", "England", "Dutch"]
  },
  {
    year: "1681",
    event: "William Penn founds Pennsylvania",
    eventJa: "ウィリアム・ペンがペンシルベニアを建設。クエーカー教徒の信仰の自由を保証する植民地となる。",
    era: "植民地時代",
    keywords: ["Pennsylvania", "William Penn", "settlement"]
  },
  {
    year: "1692",
    event: "Salem Witch Trials begin",
    eventJa: "セーラム魔女裁判が始まる。マサチューセッツで20人以上が処刑された。",
    era: "植民地時代",
    keywords: ["Salem", "witch trials", "Massachusetts"]
  },
  {
    year: "1700",
    event: "Population of British colonies reaches 250,000",
    eventJa: "イギリス領北米植民地の人口が約25万人に達する。植民地化が進行している。",
    era: "植民地時代",
    keywords: ["population", "growth", "colonies"]
  },
  {
    year: "1704",
    event: "Boston News-Letter published",
    eventJa: "ボストン・ニューズレターが発行される。アメリカ最初の継続的新聞。",
    era: "植民地時代",
    keywords: ["Boston", "newspaper", "media"]
  },
  {
    year: "1732",
    event: "Georgia Colony founded",
    eventJa: "ジェームス・オグルソープがジョージア植民地を創設。イギリスの13植民地が完成する。",
    era: "植民地時代",
    keywords: ["Georgia", "settlement", "Oglethorpe"]
  },
  {
    year: "1740",
    event: "Great Awakening begins",
    eventJa: "大覚醒運動が始まる。宗教的復興と植民地全体での精神的変化をもたらす。",
    era: "植民地時代",
    keywords: ["Great Awakening", "religion", "revival"]
  },
  {
    year: "1754",
    event: "French and Indian War begins",
    eventJa: "フレンチ・インディアン戦争が始まる。フランスとイギリスの北米での主導権争いが激化する。",
    era: "植民地時代",
    keywords: ["French and Indian War", "France", "England"]
  },
  {
    year: "1763",
    event: "Treaty of Paris ends French and Indian War",
    eventJa: "パリ条約によってフレンチ・インディアン戦争が終結。フランスはカナダを失い、イギリスが北米支配を確立する。",
    era: "植民地時代",
    keywords: ["Treaty of Paris", "France", "England"]
  },
  {
    year: "1765",
    event: "Stamp Act passed",
    eventJa: "スタンプ法がイギリス議会で可決。植民地への直接課税に抗議が高まり、独立への道が近づく。",
    era: "植民地時代",
    keywords: ["Stamp Act", "taxation", "protest"]
  },
  {
    year: "1767",
    event: "Townshend Acts passed",
    eventJa: "タウンゼンド諸法が可決。植民地の輸入品に税を課し、植民地人の怒りが増幅する。",
    era: "植民地時代",
    keywords: ["Townshend Acts", "taxation", "protest"]
  },
  {
    year: "1770",
    event: "Boston Massacre occurs",
    eventJa: "ボストン虐殺事件が起こる。イギリス兵が植民地人5人を銃撃。独立への感情が高まる。",
    era: "植民地時代",
    keywords: ["Boston Massacre", "protest", "violence"]
  },
  {
    year: "1773",
    event: "Boston Tea Party",
    eventJa: "ボストン茶会事件が起こる。植民地人がイギリスの茶税に抗議して紅茶を海に投棄。",
    era: "植民地時代",
    keywords: ["Boston Tea Party", "protest", "taxation"]
  },
  {
    year: "1774",
    event: "First Continental Congress convenes",
    eventJa: "第一次大陸会議が開催。13植民地がイギリスに対する統一的抵抗を決定する。",
    era: "植民地時代",
    keywords: ["Continental Congress", "colonial unity"]
  },

  // 独立革命 (American Revolution, 1775-1789)
  {
    year: "1775",
    event: "Battle of Lexington and Concord",
    eventJa: "レキシントン・コンコード戦闘が起こる。アメリカ独立戦争の最初の武力衝突。",
    era: "独立革命",
    keywords: ["Lexington", "Concord", "battle", "war"]
  },
  {
    year: "1775",
    event: "George Washington appointed Commander-in-Chief",
    eventJa: "ジョージ・ワシントンが大陸軍総司令官に任命される。アメリカ独立戦争の指揮を担う。",
    era: "独立革命",
    keywords: ["Washington", "military", "leadership"]
  },
  {
    year: "1776",
    event: "Declaration of Independence signed",
    eventJa: "独立宣言がフィラデルフィアで採択される。13植民地がイギリスからの独立を宣言。",
    era: "独立革命",
    keywords: ["Declaration of Independence", "Jefferson", "independence"]
  },
  {
    year: "1776",
    event: "Battle of Long Island",
    eventJa: "ロングアイランド戦闘でワシントン軍がイギリス軍に敗北。ニューヨークを失う。",
    era: "独立革命",
    keywords: ["Long Island", "battle", "defeat"]
  },
  {
    year: "1776",
    event: "Battle of Trenton",
    eventJa: "トレントン戦闘でワシントン軍がイギリス軍に勝利。パターソン将軍の傭兵軍を破る。",
    era: "独立革命",
    keywords: ["Trenton", "battle", "victory"]
  },
  {
    year: "1777",
    event: "Battle of Saratoga - turning point",
    eventJa: "サラトガ戦闘でアメリカ軍がイギリス軍を撃破。独立戦争の転機となり、フランスの参戦を促す。",
    era: "独立革命",
    keywords: ["Saratoga", "battle", "turning point"]
  },
  {
    year: "1778",
    event: "France enters the war as American ally",
    eventJa: "フランスがアメリカの同盟国として独立戦争に参戦。アメリカ軍の支援が強まる。",
    era: "独立革命",
    keywords: ["France", "alliance", "military support"]
  },
  {
    year: "1781",
    event: "Battle of Yorktown - final victory",
    eventJa: "ヨークタウン戦闘でアメリカ・フランス連合軍がイギリス軍に決定的勝利。独立戦争が実質終結。",
    era: "独立革命",
    keywords: ["Yorktown", "battle", "victory", "final"]
  },
  {
    year: "1783",
    event: "Treaty of Paris - independence recognized",
    eventJa: "パリ条約によってイギリスがアメリカの独立を正式に認める。独立戦争が正式終結。",
    era: "独立革命",
    keywords: ["Treaty of Paris", "independence", "recognition"]
  },
  {
    year: "1785",
    event: "Land Ordinance of 1785 passed",
    eventJa: "1785年土地法が可決。西部領土の測量と販売方法を規定。都市計画の基準となる。",
    era: "独立革命",
    keywords: ["Land Ordinance", "western lands", "survey"]
  },
  {
    year: "1787",
    event: "Northwest Ordinance passed",
    eventJa: "北西部開拓法が可決。北西部領土の統治と奴隷制度の禁止を定める。",
    era: "独立革命",
    keywords: ["Northwest Ordinance", "slavery", "territories"]
  },
  {
    year: "1787",
    event: "Constitutional Convention in Philadelphia",
    eventJa: "フィラデルフィアで憲法制定会議が開催。アメリカ合衆国憲法が草案される。",
    era: "独立革命",
    keywords: ["Constitutional Convention", "Constitution", "Philadelphia"]
  },
  {
    year: "1787",
    event: "United States Constitution drafted",
    eventJa: "アメリカ合衆国憲法が起草される。3権分立と連邦制度の枠組みが確立される。",
    era: "独立革命",
    keywords: ["Constitution", "government", "framework"]
  },
  {
    year: "1788",
    event: "Constitution ratified by states",
    eventJa: "憲法が各州による批准を完了。9州の批准でアメリカ連邦政府が成立する条件が満たされる。",
    era: "独立革命",
    keywords: ["Constitution", "ratification", "states"]
  },
  {
    year: "1789",
    event: "George Washington inaugurated as first president",
    eventJa: "ジョージ・ワシントンが初代大統領に就任。アメリカ合衆国政府が正式に発足する。",
    era: "独立革命",
    keywords: ["Washington", "president", "inauguration"]
  },

  // 建国初期 (Early Republic, 1789-1830)
  {
    year: "1789",
    event: "Bill of Rights proposed",
    eventJa: "権利章典がジェームズ・マディソンによって提案される。基本的人権の保護が明記される。",
    era: "建国初期",
    keywords: ["Bill of Rights", "Madison", "rights"]
  },
  {
    year: "1791",
    event: "Bill of Rights ratified",
    eventJa: "権利章典が批准される。憲法修正第1条から第10条が採択され、個人の自由が保障される。",
    era: "建国初期",
    keywords: ["Bill of Rights", "ratification", "freedom"]
  },
  {
    year: "1791",
    event: "First Bank of the United States chartered",
    eventJa: "アメリカ合衆国第一銀行が設立される。アレクサンダー・ハミルトンの財政政策の中心。",
    era: "建国初期",
    keywords: ["Bank of the United States", "Hamilton", "finance"]
  },
  {
    year: "1793",
    event: "Whiskey Rebellion begins",
    eventJa: "ウイスキー反乱が起こる。ペンシルベニア州の農民がウイスキー税に抵抗。",
    era: "建国初期",
    keywords: ["Whiskey Rebellion", "tax", "protest"]
  },
  {
    year: "1795",
    event: "Jay's Treaty with Britain",
    eventJa: "ジェイ条約がイギリスと結ばれる。北西領土から英軍撤退を定める。",
    era: "建国初期",
    keywords: ["Jay Treaty", "Britain", "diplomacy"]
  },
  {
    year: "1796",
    event: "Washington's Farewell Address",
    eventJa: "ワシントンが告別演説を発表。政党制度と海外への過度な関与への警告を示す。",
    era: "建国初期",
    keywords: ["Washington", "farewell", "address"]
  },
  {
    year: "1797",
    event: "John Adams inaugurated as second president",
    eventJa: "ジョン・アダムスが第2代大統領に就任。ジョージ・ワシントンの後継者となる。",
    era: "建国初期",
    keywords: ["Adams", "president", "inauguration"]
  },
  {
    year: "1798",
    event: "Quasi-War with France begins",
    eventJa: "フランスとの準戦争が始まる。アメリカ商船がフランス海軍に捕獲される事件が多発。",
    era: "建国初期",
    keywords: ["Quasi-War", "France", "naval"]
  },
  {
    year: "1800",
    event: "Thomas Jefferson elected president",
    eventJa: "トマス・ジェファーソンが第3代大統領に選出される。民主共和党による政権交代を実現。",
    era: "建国初期",
    keywords: ["Jefferson", "election", "president"]
  },
  {
    year: "1803",
    event: "Louisiana Purchase completed",
    eventJa: "ルイジアナ購入が完了。フランスから約200万ドルでルイジアナ領土を買収。アメリカ領土が倍増する。",
    era: "建国初期",
    keywords: ["Louisiana Purchase", "expansion", "territory"]
  },
  {
    year: "1804",
    event: "Lewis and Clark Expedition begins",
    eventJa: "ルイスとクラーク遠征が開始される。西部領土の探検と調査を実施。",
    era: "建国初期",
    keywords: ["Lewis and Clark", "exploration", "west"]
  },
  {
    year: "1807",
    event: "Embargo Act passed",
    eventJa: "禁輸法が可決される。イギリスとフランスへの輸出を禁止する経済制裁。",
    era: "建国初期",
    keywords: ["Embargo Act", "trade", "restrictions"]
  },
  {
    year: "1809",
    event: "James Madison inaugurated as president",
    eventJa: "ジェームズ・マディソンが第4代大統領に就任。第二次米英戦争へ向かう時期を迎える。",
    era: "建国初期",
    keywords: ["Madison", "president", "inauguration"]
  },
  {
    year: "1811",
    event: "Battle of Tippecanoe",
    eventJa: "ティペカヌー戦闘が起こる。ウィリアム・ハリソンがネイティブアメリカン連合を破る。",
    era: "建国初期",
    keywords: ["Tippecanoe", "battle", "Native Americans"]
  },
  {
    year: "1812",
    event: "War of 1812 begins",
    eventJa: "1812年戦争が始まる。アメリカがイギリスに宣戦布告。独立後初の対外戦争。",
    era: "建国初期",
    keywords: ["War of 1812", "Britain", "war"]
  },
  {
    year: "1814",
    event: "Treaty of Ghent ends War of 1812",
    eventJa: "ヘント条約によって1812年戦争が終結。戦前の状況に戻る形で終わる。",
    era: "建国初期",
    keywords: ["Treaty of Ghent", "War of 1812", "peace"]
  },
  {
    year: "1815",
    event: "Battle of New Orleans",
    eventJa: "ニューオーリンズ戦闘でアメリカ軍が大勝利。戦争終結後に行われた最大の戦闘。",
    era: "建国初期",
    keywords: ["New Orleans", "battle", "victory"]
  },
  {
    year: "1817",
    event: "James Monroe inaugurated as president",
    eventJa: "ジェームズ・モンローが第5代大統領に就任。『モンロー主義』の時代が始まる。",
    era: "建国初期",
    keywords: ["Monroe", "president", "inauguration"]
  },
  {
    year: "1819",
    event: "Florida ceded by Spain to United States",
    eventJa: "スペインがフロリダをアメリカに割譲。アメリカが南東の領土を確保。",
    era: "建国初期",
    keywords: ["Florida", "Spain", "territory"]
  },
  {
    year: "1823",
    event: "Monroe Doctrine proclaimed",
    eventJa: "モンロー宣言が発表される。ヨーロッパの西半球への干渉に対抗する宣言。",
    era: "建国初期",
    keywords: ["Monroe Doctrine", "foreign policy", "Americas"]
  },
  {
    year: "1825",
    event: "Erie Canal opens",
    eventJa: "イーリー運河が開通。ニューヨークの発展と北東部の経済成長を促進。",
    era: "建国初期",
    keywords: ["Erie Canal", "infrastructure", "transportation"]
  },
  {
    year: "1828",
    event: "Andrew Jackson elected president",
    eventJa: "アンドリュー・ジャクソンが第7代大統領に選出される。一般民衆による投票が拡大する時代となる。",
    era: "建国初期",
    keywords: ["Jackson", "election", "democracy"]
  },

  // 西部開拓・南北戦争 (Expansion & Civil War, 1830-1877)
  {
    year: "1830",
    event: "Indian Removal Act passed",
    eventJa: "インディアン移住法が可決。ネイティブアメリカンを西部に強制移動させる政策が開始。",
    era: "西部開拓・南北戦争",
    keywords: ["Indian Removal Act", "Native Americans", "policy"]
  },
  {
    year: "1832",
    event: "Black Hawk War",
    eventJa: "ブラック・ホーク戦争が起こる。ネイティブアメリカンの抵抗とアメリカ軍の衝突。",
    era: "西部開拓・南北戦争",
    keywords: ["Black Hawk War", "Native Americans", "conflict"]
  },
  {
    year: "1836",
    event: "Texas Revolution - Alamo falls",
    eventJa: "テキサス革命でアラモ砦がメキシコ軍に陥落。テキサスの独立戦争が激化。",
    era: "西部開拓・南北戦争",
    keywords: ["Texas", "Alamo", "revolution"]
  },
  {
    year: "1836",
    event: "Texas independence declared",
    eventJa: "テキサスがメキシコから独立を宣言。テキサス共和国が建設される。",
    era: "西部開拓・南北戦争",
    keywords: ["Texas", "independence", "revolution"]
  },
  {
    year: "1840",
    event: "William Henry Harrison elected president",
    eventJa: "ウィリアム・ハリソンが大統領に選出されるが、就任1ヶ月で死亡。",
    era: "西部開拓・南北戦争",
    keywords: ["Harrison", "election", "death"]
  },
  {
    year: "1841",
    event: "John Tyler becomes president after Harrison's death",
    eventJa: "ジョン・タイラーがハリソン大統領の死後、第10代大統領となる。",
    era: "西部開拓・南北戦争",
    keywords: ["Tyler", "president", "succession"]
  },
  {
    year: "1845",
    event: "Texas annexation by United States",
    eventJa: "テキサスがアメリカに併合される。アメリカの領土が大幅に拡大。",
    era: "西部開拓・南北戦争",
    keywords: ["Texas", "annexation", "expansion"]
  },
  {
    year: "1846",
    event: "Mexican-American War begins",
    eventJa: "米墨戦争が始まる。アメリカの領土拡張主義がメキシコと衝突。",
    era: "西部開拓・南北戦争",
    keywords: ["Mexican-American War", "Mexico", "war"]
  },
  {
    year: "1846",
    event: "Oregon Territory divided with Britain",
    eventJa: "オレゴン領土がイギリスとアメリカで分割される。49度線での境界線が決定。",
    era: "西部開拓・南北戦争",
    keywords: ["Oregon Territory", "Britain", "boundary"]
  },
  {
    year: "1848",
    event: "Treaty of Guadalupe Hidalgo ends Mexican-American War",
    eventJa: "グアダルペ・イダルゴ条約で米墨戦争が終結。アメリカがメキシコから広大な領土を獲得。",
    era: "西部開拓・南北戦争",
    keywords: ["Treaty of Guadalupe Hidalgo", "Mexico", "territory"]
  },
  {
    year: "1848",
    event: "California Gold Rush begins",
    eventJa: "カリフォルニア・ゴールドラッシュが始まる。大量の移民がカリフォルニアに殺到。",
    era: "西部開拓・南北戦争",
    keywords: ["Gold Rush", "California", "migration"]
  },
  {
    year: "1849",
    event: "California statehood admitted",
    eventJa: "カリフォルニアが州として入連する。大陸横断の領土拡張が完成。",
    era: "西部開拓・南北戦争",
    keywords: ["California", "statehood", "admission"]
  },
  {
    year: "1850",
    event: "Compromise of 1850 passed",
    eventJa: "1850年の妥協案が可決。奴隷制度をめぐる南北対立の緊張を一時的に緩和。",
    era: "西部開拓・南北戦争",
    keywords: ["Compromise of 1850", "slavery", "compromise"]
  },
  {
    year: "1852",
    event: "Uncle Tom's Cabin published",
    eventJa: "『アンクル・トムの小屋』が出版される。奴隷制度への反発を全国で高める。",
    era: "西部開拓・南北戦争",
    keywords: ["Uncle Tom's Cabin", "slavery", "literature"]
  },
  {
    year: "1854",
    event: "Kansas-Nebraska Act passed",
    eventJa: "カンザス・ネブラスカ法が可決。各領土の人民主権による奴隷制度選択を認め、南北対立が激化。",
    era: "西部開拓・南北戦争",
    keywords: ["Kansas-Nebraska Act", "slavery", "territories"]
  },
  {
    year: "1857",
    event: "Dred Scott Decision",
    eventJa: "ドレッド・スコット判決で黒人に市民権がないと判示。奴隷制度支持側に有利。",
    era: "西部開拓・南北戦争",
    keywords: ["Dred Scott", "slavery", "rights"]
  },
  {
    year: "1859",
    event: "John Brown's raid on Harpers Ferry",
    eventJa: "ジョン・ブラウンがハーパーズ・フェリーを襲撃。奴隷解放を目指した反乱が失敗。",
    era: "西部開拓・南北戦争",
    keywords: ["John Brown", "Harpers Ferry", "raid"]
  },
  {
    year: "1860",
    event: "Abraham Lincoln elected president",
    eventJa: "エイブラハム・リンカーンが大統領に選出される。南部の分離独立を招く。",
    era: "西部開拓・南北戦争",
    keywords: ["Lincoln", "election", "president"]
  },
  {
    year: "1861",
    event: "Secession of Confederate States begins",
    eventJa: "南部11州がアメリカ連邦から分離。アメリカ連邦国が成立する。",
    era: "西部開拓・南北戦争",
    keywords: ["Secession", "South", "Confederacy"]
  },
  {
    year: "1861",
    event: "Battle of Fort Sumter - Civil War begins",
    eventJa: "フォート・サムター戦闘が起こる。南北戦争の最初の戦闘。",
    era: "西部開拓・南北戦争",
    keywords: ["Fort Sumter", "Civil War", "beginning"]
  },
  {
    year: "1862",
    event: "Battle of Shiloh - bloodiest battle so far",
    eventJa: "シローの戦いが起こる。多数の死傷者を出し、戦争の激しさを象徴する。",
    era: "西部開拓・南北戦争",
    keywords: ["Shiloh", "battle", "casualties"]
  },
  {
    year: "1862",
    event: "Emancipation Proclamation issued",
    eventJa: "奴隷解放宣言が発令される。南部の反乱州の奴隷が解放される。",
    era: "西部開拓・南北戦争",
    keywords: ["Emancipation Proclamation", "slavery", "freedom"]
  },
  {
    year: "1863",
    event: "Battle of Gettysburg - turning point",
    eventJa: "ゲティスバーグ戦闘でアメリカ軍が南軍を撃破。南北戦争の転機となる。",
    era: "西部開拓・南北戦争",
    keywords: ["Gettysburg", "battle", "turning point"]
  },
  {
    year: "1863",
    event: "Gettysburg Address delivered",
    eventJa: "ゲティスバーグ演説がリンカーン大統領によって発表される。民主主義と人権の大義を示す。",
    era: "西部開拓・南北戦争",
    keywords: ["Gettysburg Address", "Lincoln", "speech"]
  },
  {
    year: "1864",
    event: "Sherman's March to the Sea",
    eventJa: "シャーマン将軍が南部を横断。南部の経済と軍事力を破壊。",
    era: "西部開拓・南北戦争",
    keywords: ["Sherman", "march", "destruction"]
  },
  {
    year: "1865",
    event: "Lee surrenders at Appomattox Court House",
    eventJa: "リー将軍がアポマトックス・コートハウスで降伏。南北戦争が事実上終結。",
    era: "西部開拓・南北戦争",
    keywords: ["Lee", "surrender", "Appomattox"]
  },
  {
    year: "1865",
    event: "Thirteenth Amendment abolishes slavery",
    eventJa: "憲法修正第13条が採択。奴隷制度を完全に廃止。",
    era: "西部開拓・南北戦争",
    keywords: ["Thirteenth Amendment", "slavery", "abolition"]
  },
  {
    year: "1865",
    event: "Lincoln assassinated",
    eventJa: "リンカーン大統領が暗殺される。アメリカ国内で深い悲しみが広がる。",
    era: "西部開拓・南北戦争",
    keywords: ["Lincoln", "assassination", "death"]
  },
  {
    year: "1866",
    event: "Fourteenth Amendment passed",
    eventJa: "憲法修正第14条が可決。すべての人に平等な法の保護を保障。",
    era: "西部開拓・南北戦争",
    keywords: ["Fourteenth Amendment", "civil rights", "equality"]
  },
  {
    year: "1867",
    event: "Alaska purchased from Russia",
    eventJa: "アラスカがロシアから購入される。アメリカの領土が太平洋に拡大。",
    era: "西部開拓・南北戦争",
    keywords: ["Alaska", "purchase", "expansion"]
  },
  {
    year: "1869",
    event: "Transcontinental Railroad completed",
    eventJa: "大陸横断鉄道が完成。東西海岸が鉄道で結ばれ、国家統合が進む。",
    era: "西部開拓・南北戦争",
    keywords: ["Transcontinental Railroad", "infrastructure", "transport"]
  },
  {
    year: "1870",
    event: "Fifteenth Amendment grants voting rights",
    eventJa: "憲法修正第15条が採択。人種に関わらず投票権が保障される。",
    era: "西部開拓・南北戦争",
    keywords: ["Fifteenth Amendment", "voting rights", "rights"]
  },
  {
    year: "1877",
    event: "Reconstruction era ends",
    eventJa: "再構成期が終わる。南部への軍事統治が解除され、南部の独立した統治が開始される。",
    era: "西部開拓・南北戦争",
    keywords: ["Reconstruction", "South", "military"]
  },

  // 金ぴか時代・革新主義 (Gilded Age & Progressive Era, 1877-1920)
  {
    year: "1878",
    event: "Bland-Allison Act passed",
    eventJa: "ブランド・アリソン法が可決。銀貨の鋳造を再開。貨幣供給量の増加を目指す。",
    era: "金ぴか時代・革新主義",
    keywords: ["Bland-Allison Act", "currency", "silver"]
  },
  {
    year: "1880",
    event: "James Garfield elected president",
    eventJa: "ジェームズ・ガーフィールドが大統領に選出される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Garfield", "election", "president"]
  },
  {
    year: "1881",
    event: "Garfield assassinated; Chester Arthur becomes president",
    eventJa: "ガーフィールド大統領が暗殺される。チェスター・アーサーが大統領となる。",
    era: "金ぴか時代・革新主義",
    keywords: ["Garfield", "assassination", "Arthur"]
  },
  {
    year: "1883",
    event: "Pendleton Civil Service Act passed",
    eventJa: "ペンドルトン公務員法が可決。公務員採用を成績制度に基づく方式に改革。",
    era: "金ぴか時代・革新主義",
    keywords: ["Civil Service Act", "reform", "government"]
  },
  {
    year: "1885",
    event: "Grover Cleveland elected president",
    eventJa: "グローバー・クリーブランドが第22代大統領に選出される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Cleveland", "election", "president"]
  },
  {
    year: "1887",
    event: "Interstate Commerce Act passed",
    eventJa: "州間通商法が可決。鉄道企業の規制が開始され、独占排除を目指す。",
    era: "金ぴか時代・革新主義",
    keywords: ["Interstate Commerce Act", "regulation", "railroad"]
  },
  {
    year: "1887",
    event: "Dawes Act passed",
    eventJa: "ドウズ法が可決。ネイティブアメリカンの土地を個人に分配する政策。",
    era: "金ぴか時代・革新主義",
    keywords: ["Dawes Act", "Native Americans", "land"]
  },
  {
    year: "1889",
    event: "Oklahoma Land Rush",
    eventJa: "オクラホマ・ランドラッシュが起こる。西部開拓の最後の大規模移民。",
    era: "金ぴか時代・革新主義",
    keywords: ["Oklahoma", "land rush", "migration"]
  },
  {
    year: "1890",
    event: "Sherman Antitrust Act passed",
    eventJa: "シャーマン独占禁止法が可決。独占企業に対する規制が強化される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Sherman Act", "antitrust", "monopoly"]
  },
  {
    year: "1890",
    event: "Wounded Knee Massacre",
    eventJa: "ウーンデッド・ニー虐殺が起こる。ラコタ・スー族への軍事作戦で多くが殺害される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Wounded Knee", "Native Americans", "massacre"]
  },
  {
    year: "1892",
    event: "Ellis Island immigration station opens",
    eventJa: "エリス島移民局が開設される。ヨーロッパからの移民がここを通過する。",
    era: "金ぴか時代・革新主義",
    keywords: ["Ellis Island", "immigration", "station"]
  },
  {
    year: "1893",
    event: "World's Columbian Exposition in Chicago",
    eventJa: "シカゴでコロンブス世界博覧会が開催される。アメリカの文化と工業の発展を世界に示す。",
    era: "金ぴか時代・革新主義",
    keywords: ["World's Fair", "Chicago", "exposition"]
  },
  {
    year: "1893",
    event: "Financial Panic of 1893",
    eventJa: "1893年恐慌が起こる。銀行倒産と失業が増加。経済危機が深刻化。",
    era: "金ぴか時代・革新主義",
    keywords: ["Financial Panic", "depression", "economy"]
  },
  {
    year: "1895",
    event: "Supreme Court upholds income tax ruling",
    eventJa: "所得税がアメリカで初めて合憲と判断される。連邦政府の財源確保が強化される。",
    era: "金ぴか時代・革新主義",
    keywords: ["income tax", "Supreme Court", "taxation"]
  },
  {
    year: "1896",
    event: "William McKinley elected president",
    eventJa: "ウィリアム・マッキンレーが第25代大統領に選出される。帝国主義的拡張を推し進める。",
    era: "金ぴか時代・革新主義",
    keywords: ["McKinley", "election", "president"]
  },
  {
    year: "1898",
    event: "Spanish-American War begins",
    eventJa: "米西戦争が始まる。アメリカが帝国主義的領土拡張を開始。",
    era: "金ぴか時代・革新主義",
    keywords: ["Spanish-American War", "Spain", "war"]
  },
  {
    year: "1898",
    event: "USS Maine explodes in Havana",
    eventJa: "戦艦メーン号がハバナで爆発。米西戦争の原因となる。",
    era: "金ぴか時代・革新主義",
    keywords: ["USS Maine", "Cuba", "explosion"]
  },
  {
    year: "1898",
    event: "Treaty of Paris grants US colonial territories",
    eventJa: "パリ条約でアメリカがグアム、プエルトリコ、フィリピンを獲得。",
    era: "金ぴか時代・革新主義",
    keywords: ["Treaty of Paris", "colonies", "territories"]
  },
  {
    year: "1899",
    event: "Philippine-American War begins",
    eventJa: "フィリピン米戦争が始まる。アメリカのフィリピン支配に対する独立派の抵抗。",
    era: "金ぴか時代・革新主義",
    keywords: ["Philippine-American War", "Philippines", "war"]
  },
  {
    year: "1901",
    event: "William McKinley assassinated; Theodore Roosevelt becomes president",
    eventJa: "マッキンレー大統領が暗殺される。セオドア・ルーズベルトが第26代大統領となる。",
    era: "金ぴか時代・革新主義",
    keywords: ["McKinley", "assassination", "Roosevelt"]
  },
  {
    year: "1902",
    event: "Philippine-American War ends",
    eventJa: "フィリピン米戦争が終結。アメリカによるフィリピン統治が確立される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Philippine-American War", "Philippines", "peace"]
  },
  {
    year: "1903",
    event: "Panama Canal construction begins",
    eventJa: "パナマ運河の建設が始まる。太平洋とカリブ海を結ぶ重要な海上輸送路。",
    era: "金ぴか時代・革新主義",
    keywords: ["Panama Canal", "construction", "infrastructure"]
  },
  {
    year: "1904",
    event: "Theodore Roosevelt elected president",
    eventJa: "セオドア・ルーズベルトが大統領に再選される。進歩主義改革時代が本格化。",
    era: "金ぴか時代・革新主義",
    keywords: ["Roosevelt", "election", "president"]
  },
  {
    year: "1906",
    event: "The Jungle published by Upton Sinclair",
    eventJa: "アプトン・シンクレアが『ジャングル』を出版。食肉加工業の悪質な労働環境を暴露。",
    era: "金ぴか時代・革新主義",
    keywords: ["The Jungle", "Sinclair", "exposé"]
  },
  {
    year: "1906",
    event: "Pure Food and Drug Act passed",
    eventJa: "純粋食品医薬品法が可決。食品の安全性と医薬品の規制を強化。",
    era: "金ぴか時代・革新主義",
    keywords: ["Pure Food and Drug Act", "food safety", "regulation"]
  },
  {
    year: "1906",
    event: "San Francisco earthquake and fire",
    eventJa: "サンフランシスコで大地震と火災が発生。大規模な破壊と復興。",
    era: "金ぴか時代・革新主義",
    keywords: ["San Francisco", "earthquake", "disaster"]
  },
  {
    year: "1907",
    event: "Financial Panic of 1907",
    eventJa: "1907年恐慌が起こる。銀行危機と株価下落。FRB設立のきっかけとなる。",
    era: "金ぴか時代・革新主義",
    keywords: ["Financial Panic", "depression", "economy"]
  },
  {
    year: "1909",
    event: "William Howard Taft becomes president",
    eventJa: "ウィリアム・ハワード・タフトが第27代大統領となる。ルーズベルトの後継者。",
    era: "金ぴか時代・革新主義",
    keywords: ["Taft", "president", "inauguration"]
  },
  {
    year: "1910",
    event: "NAACP founded",
    eventJa: "全米有色人種協会（NAACP）が設立される。黒人の公民権運動が本格化。",
    era: "金ぴか時代・革新主義",
    keywords: ["NAACP", "civil rights", "founded"]
  },
  {
    year: "1911",
    event: "Triangle Shirtwaist Factory Fire",
    eventJa: "トライアングル・シャツウェスト工場火災が起こる。多数の労働者が死亡。労働運動が激化。",
    era: "金ぴか時代・革新主義",
    keywords: ["Triangle Fire", "labor", "disaster"]
  },
  {
    year: "1912",
    event: "Woodrow Wilson elected president",
    eventJa: "ウッドロー・ウィルソンが第28代大統領に選出される。進歩主義改革の時代が続く。",
    era: "金ぴか時代・革新主義",
    keywords: ["Wilson", "election", "president"]
  },
  {
    year: "1913",
    event: "Federal Reserve Act passed",
    eventJa: "連邦準備制度法が可決。アメリカの中央銀行制度が確立される。",
    era: "金ぴか時代・革新主義",
    keywords: ["Federal Reserve Act", "banking", "finance"]
  },
  {
    year: "1913",
    event: "Sixteenth Amendment ratified",
    eventJa: "憲法修正第16条が批准。連邦政府による所得税徴収が正式に認められる。",
    era: "金ぴか時代・革新主義",
    keywords: ["Sixteenth Amendment", "income tax", "taxation"]
  },
  {
    year: "1914",
    event: "Panama Canal opens",
    eventJa: "パナマ運河が正式に開通。太平洋とカリブ海の航海時間が大幅に短縮される。",
    era: "世界大戦期",
    keywords: ["Panama Canal", "opening", "infrastructure"]
  },

  // 世界大戦期 (World Wars Era, 1914-1945)
  {
    year: "1915",
    event: "Lusitania sunk by German submarine",
    eventJa: "豪華客船ルシタニア号がドイツ潜水艦に撃沈。米国人死者を含む多数の犠牲者。",
    era: "世界大戦期",
    keywords: ["Lusitania", "submarine", "Germany"]
  },
  {
    year: "1916",
    event: "Woodrow Wilson reelected president",
    eventJa: "ウィルソン大統領が再選される。『戦争に巻き込まないこと』が標語。",
    era: "世界大戦期",
    keywords: ["Wilson", "election", "neutrality"]
  },
  {
    year: "1917",
    event: "United States enters World War I",
    eventJa: "アメリカが第一次世界大戦に参戦。ドイツとの戦いに本格的に参加。",
    era: "世界大戦期",
    keywords: ["World War I", "United States", "entry"]
  },
  {
    year: "1917",
    event: "Selective Service Act passed",
    eventJa: "兵役徴募法が可決。大規模な軍隊の動員が始まる。",
    era: "世界大戦期",
    keywords: ["Selective Service", "draft", "military"]
  },
  {
    year: "1918",
    event: "World War I ends with Armistice",
    eventJa: "第一次世界大戦が休戦協定で終結。アメリカが連合国側の勝利を支援。",
    era: "世界大戦期",
    keywords: ["World War I", "armistice", "peace"]
  },
  {
    year: "1919",
    event: "Treaty of Versailles signed",
    eventJa: "ベルサイユ条約が署名される。ドイツへの厳しい処罰が定められる。",
    era: "世界大戦期",
    keywords: ["Treaty of Versailles", "peace", "treaty"]
  },
  {
    year: "1919",
    event: "League of Nations proposed by Wilson",
    eventJa: "ウィルソン大統領が国際連盟を提案。国際平和維持の試み。",
    era: "世界大戦期",
    keywords: ["League of Nations", "Wilson", "international"]
  },
  {
    year: "1920",
    event: "Nineteenth Amendment gives women voting rights",
    eventJa: "憲法修正第19条が批准。女性に投票権が与えられる。",
    era: "世界大戦期",
    keywords: ["Nineteenth Amendment", "women's suffrage", "voting"]
  },
  {
    year: "1920",
    event: "Prohibition begins",
    eventJa: "禁酒令が発効。アルコール飲料の製造・販売・消費が禁止される。",
    era: "世界大戦期",
    keywords: ["Prohibition", "alcohol", "law"]
  },
  {
    year: "1921",
    event: "Warren G. Harding becomes president",
    eventJa: "ウォーレン・G・ハーディング大統領が就任。『正常化の復帰』を標語に掲げる。",
    era: "世界大戦期",
    keywords: ["Harding", "president", "normalcy"]
  },
  {
    year: "1925",
    event: "The Great Gatsby published",
    eventJa: "F・スコット・フィッツジェラルドが『グレート・ギャツビー』を出版。1920年代の栄光と衰退を描く。",
    era: "世界大戦期",
    keywords: ["Great Gatsby", "literature", "1920s"]
  },
  {
    year: "1926",
    event: "Langston Hughes publishes The Weary Blues",
    eventJa: "ラングストン・ヒューズが『疲れたブルース』を出版。ハーレム・ルネッサンスを象徴。",
    era: "世界大戦期",
    keywords: ["Langston Hughes", "Harlem", "literature"]
  },
  {
    year: "1927",
    event: "Charles Lindbergh's transatlantic flight",
    eventJa: "チャールズ・リンドバーグが大西洋横断飛行に成功。航空時代の到来を象徴。",
    era: "世界大戦期",
    keywords: ["Lindbergh", "aviation", "flight"]
  },
  {
    year: "1928",
    event: "Herbert Hoover elected president",
    eventJa: "ハーバート・フーバーが大統領に選出される。経済の繁栄が続く時代。",
    era: "世界大戦期",
    keywords: ["Hoover", "election", "president"]
  },
  {
    year: "1929",
    event: "Wall Street Crash - Great Depression begins",
    eventJa: "ウォール街大暴落が起こり、大恐慌が始まる。アメリカ経済が深刻な危機に陥る。",
    era: "世界大戦期",
    keywords: ["Great Depression", "crash", "economy"]
  },
  {
    year: "1932",
    event: "Franklin D. Roosevelt elected president",
    eventJa: "フランクリン・D・ルーズベルト大統領が選出される。ニューディール政策で大恐慌に対抗。",
    era: "世界大戦期",
    keywords: ["FDR", "election", "New Deal"]
  },
  {
    year: "1933",
    event: "FDR inaugurated; New Deal begins",
    eventJa: "ルーズベルト大統領が就任。『唯一恐れるべきものは恐怖そのものである』という名演説を行う。",
    era: "世界大戦期",
    keywords: ["FDR", "New Deal", "inauguration"]
  },
  {
    year: "1933",
    event: "Banking Holiday declared",
    eventJa: "銀行休場令が発令。銀行システムの崩壊を防ぐ緊急措置。",
    era: "世界大戦期",
    keywords: ["Banking Holiday", "banking", "emergency"]
  },
  {
    year: "1933",
    event: "Civilian Conservation Corps established",
    eventJa: "市民保全部隊（CCC）が設立。青年失業者に仕事と訓練を提供。",
    era: "世界大戦期",
    keywords: ["CCC", "New Deal", "employment"]
  },
  {
    year: "1933",
    event: "Tennessee Valley Authority created",
    eventJa: "テネシー川流域公社（TVA）が創設。地域開発と電力供給を促進。",
    era: "世界大戦期",
    keywords: ["TVA", "New Deal", "development"]
  },
  {
    year: "1935",
    event: "Works Progress Administration created",
    eventJa: "雇用促進局（WPA）が設立。公共事業による大規模な雇用創出。",
    era: "世界大戦期",
    keywords: ["WPA", "New Deal", "employment"]
  },
  {
    year: "1935",
    event: "Social Security Act passed",
    eventJa: "社会保障法が可決。老齢年金と失業保険が制度化される。",
    era: "世界大戦期",
    keywords: ["Social Security", "welfare", "legislation"]
  },
  {
    year: "1936",
    event: "FDR reelected in landslide victory",
    eventJa: "ルーズベルト大統領が圧倒的多数で再選。ニューディール政策の成功を示す。",
    era: "世界大戦期",
    keywords: ["FDR", "election", "victory"]
  },
  {
    year: "1937",
    event: "Japanese invasion of China begins",
    eventJa: "日本が中国に本格的に侵攻。アメリカのアジア政策が揺らぐ。",
    era: "世界大戦期",
    keywords: ["Japan", "China", "invasion"]
  },
  {
    year: "1938",
    event: "Munich Agreement - Appeasement of Nazi Germany",
    eventJa: "ミュンヘン協定でナチス・ドイツのチェコスロバキア侵攻を容認。絶望的な平和戦略。",
    era: "世界大戦期",
    keywords: ["Munich", "appeasement", "Nazi Germany"]
  },
  {
    year: "1939",
    event: "Germany invades Poland; World War II begins",
    eventJa: "ドイツがポーランドに侵攻。第二次世界大戦が始まる。",
    era: "世界大戦期",
    keywords: ["World War II", "Germany", "Poland"]
  },
  {
    year: "1940",
    event: "FDR reelected for unprecedented third term",
    eventJa: "ルーズベルト大統領が前例のない3期目に再選。戦時指導体制が強化される。",
    era: "世界大戦期",
    keywords: ["FDR", "election", "third term"]
  },
  {
    year: "1940",
    event: "Selective Training and Service Act passed",
    eventJa: "兵役法が可決。平時における徴兵制度が導入される。",
    era: "世界大戦期",
    keywords: ["draft", "military", "conscription"]
  },
  {
    year: "1941",
    event: "Lend-Lease Act passed",
    eventJa: "武器貸与法が可決。イギリスとソビエト連邦への支援を強化。",
    era: "世界大戦期",
    keywords: ["Lend-Lease", "aid", "Britain"]
  },
  {
    year: "1941",
    event: "Pearl Harbor attack",
    eventJa: "日本海軍がハワイのパール・ハーバーを攻撃。アメリカが第二次世界大戦に参戦する引き金となる。",
    era: "世界大戦期",
    keywords: ["Pearl Harbor", "Japan", "attack"]
  },
  {
    year: "1941",
    event: "United States declares war on Japan",
    eventJa: "アメリカが日本に宣戦布告。太平洋戦争に本格的に参戦。",
    era: "世界大戦期",
    keywords: ["war", "Japan", "declaration"]
  },
  {
    year: "1942",
    event: "Executive Order 9066 - Japanese internment begins",
    eventJa: "大統領命令により日系アメリカ人の強制収容が始まる。人権侵害の歴史的汚点。",
    era: "世界大戦期",
    keywords: ["Japanese internment", "racism", "WWII"]
  },
  {
    year: "1942",
    event: "Battle of Midway - Pacific turning point",
    eventJa: "ミッドウェー海戦で米海軍が日本海軍に大勝利。太平洋戦争の転機。",
    era: "世界大戦期",
    keywords: ["Midway", "battle", "naval"]
  },
  {
    year: "1943",
    event: "Battle of Stalingrad - Nazi Germany defeated",
    eventJa: "スターリングラード戦闘でドイツ軍が敗北。欧州戦線でのターニングポイント。",
    era: "世界大戦期",
    keywords: ["Stalingrad", "battle", "Nazi"]
  },
  {
    year: "1944",
    event: "D-Day - Normandy Invasion",
    eventJa: "ノルマンディー上陸作戦が実行される。フランス解放とナチス・ドイツ打倒への道を開く。",
    era: "世界大戦期",
    keywords: ["D-Day", "Normandy", "invasion"]
  },
  {
    year: "1944",
    event: "FDR elected for fourth term",
    eventJa: "ルーズベルト大統領が4期目に再選。戦後世界構想を推し進める。",
    era: "世界大戦期",
    keywords: ["FDR", "election", "fourth term"]
  },
  {
    year: "1945",
    event: "Yalta Conference - wartime summit",
    eventJa: "ヤルタ会談でアメリカ、イギリス、ソビエト連邦が会合。戦後世界の枠組みを協議。",
    era: "世界大戦期",
    keywords: ["Yalta", "summit", "leaders"]
  },
  {
    year: "1945",
    event: "Germany surrenders unconditionally",
    eventJa: "ドイツが無条件降伏。欧州戦線が終結。",
    era: "世界大戦期",
    keywords: ["Germany", "surrender", "V-E Day"]
  },
  {
    year: "1945",
    event: "Atomic bomb dropped on Hiroshima",
    eventJa: "広島に原子爆弾が投下される。人類初の核兵器使用による大量殺傷。",
    era: "世界大戦期",
    keywords: ["atomic bomb", "Hiroshima", "nuclear"]
  },
  {
    year: "1945",
    event: "Atomic bomb dropped on Nagasaki",
    eventJa: "長崎に原子爆弾が投下される。日本の降伏を加速させる。",
    era: "世界大戦期",
    keywords: ["atomic bomb", "Nagasaki", "nuclear"]
  },
  {
    year: "1945",
    event: "Japan surrenders unconditionally",
    eventJa: "日本が無条件降伏。第二次世界大戦が完全に終結。",
    era: "世界大戦期",
    keywords: ["Japan", "surrender", "V-J Day"]
  },
  {
    year: "1945",
    event: "FDR dies; Harry Truman becomes president",
    eventJa: "ルーズベルト大統領が死去。ハリー・トルーマンが第33代大統領となる。",
    era: "世界大戦期",
    keywords: ["FDR", "death", "Truman"]
  },

  // 冷戦期 (Cold War Era, 1945-1991)
  {
    year: "1945",
    event: "United Nations founded",
    eventJa: "国際連合が設立される。世界平和と国際協力の機関として始動。",
    era: "冷戦期",
    keywords: ["United Nations", "international", "peace"]
  },
  {
    year: "1947",
    event: "Truman Doctrine proclaimed",
    eventJa: "トルーマン・ドクトリンが発表。共産主義拡大への遏止戦略が示される。",
    era: "冷戦期",
    keywords: ["Truman Doctrine", "anti-communism", "policy"]
  },
  {
    year: "1948",
    event: "Marshall Plan initiated",
    eventJa: "マーシャル・プランが開始される。ヨーロッパの経済復興を支援。",
    era: "冷戦期",
    keywords: ["Marshall Plan", "Europe", "aid"]
  },
  {
    year: "1948",
    event: "Berlin Blockade begins",
    eventJa: "ベルリン封鎖が開始される。ソビエト連邦がベルリンへのアクセスを遮断。",
    era: "冷戦期",
    keywords: ["Berlin Blockade", "Cold War", "Soviet"]
  },
  {
    year: "1949",
    event: "NATO founded",
    eventJa: "北大西洋条約機構（NATO）が設立される。西側の集団防衛体制。",
    era: "冷戦期",
    keywords: ["NATO", "alliance", "defense"]
  },
  {
    year: "1949",
    event: "Soviet Union tests atomic bomb",
    eventJa: "ソビエト連邦が原子爆弾実験に成功。核兵器競争が本格化。",
    era: "冷戦期",
    keywords: ["Soviet", "atomic bomb", "nuclear"]
  },
  {
    year: "1950",
    event: "Korean War begins",
    eventJa: "朝鮮戦争が始まる。北朝鮮がアメリカ支援の韓国に侵攻。",
    era: "冷戦期",
    keywords: ["Korean War", "North Korea", "South Korea"]
  },
  {
    year: "1950",
    event: "Senator Joseph McCarthy begins anti-communist crusade",
    eventJa: "ジョセフ・マッカーシー上院議員が反共キャンペーンを開始。マッカーシズムが猛威を振るう。",
    era: "冷戦期",
    keywords: ["McCarthy", "anti-communism", "persecution"]
  },
  {
    year: "1952",
    event: "Dwight D. Eisenhower elected president",
    eventJa: "ドワイト・アイゼンハワーが第34代大統領に選出される。戦争の英雄が政権を担う。",
    era: "冷戦期",
    keywords: ["Eisenhower", "election", "president"]
  },
  {
    year: "1953",
    event: "Korean War armistice signed",
    eventJa: "朝鮮戦争の休戦協定が署名される。分断状態が固定化。",
    era: "冷戦期",
    keywords: ["Korean War", "armistice", "ceasefire"]
  },
  {
    year: "1954",
    event: "Brown v. Board of Education decision",
    eventJa: "ブラウン事件判決で学校人種分離の違憲が判示。公民権運動が加速。",
    era: "冷戦期",
    keywords: ["Brown v. Board", "desegregation", "civil rights"]
  },
  {
    year: "1955",
    event: "Montgomery Bus Boycott begins",
    eventJa: "モンゴメリー・バス・ボイコットが開始される。公民権運動の重要な戦い。",
    era: "冷戦期",
    keywords: ["Bus Boycott", "civil rights", "segregation"]
  },
  {
    year: "1956",
    event: "Interstate Highway System authorized",
    eventJa: "州間高速道路網が権限化される。国土の近代化が加速。",
    era: "冷戦期",
    keywords: ["Highway System", "infrastructure", "transportation"]
  },
  {
    year: "1957",
    event: "Little Rock Crisis - school desegregation",
    eventJa: "リトルロック・クライシスが発生。学校の人種統合に対する白人の激しい抵抗。",
    era: "冷戦期",
    keywords: ["Little Rock", "desegregation", "civil rights"]
  },
  {
    year: "1957",
    event: "Soviet Union launches Sputnik satellite",
    eventJa: "ソビエト連邦がスプートニク衛星を打ち上げ。宇宙開発競争が本格化。",
    era: "冷戦期",
    keywords: ["Sputnik", "space race", "satellite"]
  },
  {
    year: "1960",
    event: "John F. Kennedy elected president",
    eventJa: "ジョン・F・ケネディが第35代大統領に選出される。若き指導者が時代を象徴。",
    era: "冷戦期",
    keywords: ["Kennedy", "election", "president"]
  },
  {
    year: "1961",
    event: "Bay of Pigs invasion fails",
    eventJa: "ピグス湾事件が失敗に終わる。キューバへのクーデター企図が破綻。",
    era: "冷戦期",
    keywords: ["Bay of Pigs", "Cuba", "invasion"]
  },
  {
    year: "1961",
    event: "Berlin Wall constructed",
    eventJa: "ベルリンの壁が築かれる。東西の分裂が物理的に表現される。",
    era: "冷戦期",
    keywords: ["Berlin Wall", "Cold War", "division"]
  },
  {
    year: "1962",
    event: "Cuban Missile Crisis",
    eventJa: "キューバ・ミサイル危機が発生。核戦争寸前の国際緊張。",
    era: "冷戦期",
    keywords: ["Cuban Missile Crisis", "nuclear", "Cold War"]
  },
  {
    year: "1963",
    event: "March on Washington - I Have a Dream speech",
    eventJa: "ワシントン大行進が開催。マーティン・ルーサー・キング・Jr.が『I Have a Dream』演説を行う。",
    era: "冷戦期",
    keywords: ["March on Washington", "MLK", "civil rights"]
  },
  {
    year: "1963",
    event: "JFK assassinated in Dallas",
    eventJa: "ケネディ大統領がダラスで暗殺される。アメリカ国内が深刻な衝撃を受ける。",
    era: "冷戦期",
    keywords: ["Kennedy", "assassination", "death"]
  },
  {
    year: "1964",
    event: "Civil Rights Act passed",
    eventJa: "公民権法が可決。人種差別を違法化する歴史的立法。",
    era: "冷戦期",
    keywords: ["Civil Rights Act", "discrimination", "legislation"]
  },
  {
    year: "1964",
    event: "Gulf of Tonkin incident",
    eventJa: "トンキン湾事件が発生。ベトナム戦争へのアメリカ本格参戦の口実となる。",
    era: "冷戦期",
    keywords: ["Gulf of Tonkin", "Vietnam", "incident"]
  },
  {
    year: "1965",
    event: "Voting Rights Act passed",
    eventJa: "投票権法が可決。黒人の投票権を確保する法律が成立。",
    era: "冷戦期",
    keywords: ["Voting Rights Act", "civil rights", "voting"]
  },
  {
    year: "1965",
    event: "Operation Rolling Thunder begins",
    eventJa: "作戦『ローリング・サンダー』が開始。北ベトナムへの大規模爆撃キャンペーン。",
    era: "冷戦期",
    keywords: ["Operation Rolling Thunder", "Vietnam", "bombing"]
  },
  {
    year: "1965",
    event: "Selma to Montgomery marches",
    eventJa: "セルマからモンゴメリーへの行進が行われる。投票権獲得のための非暴力の戦い。",
    era: "冷戦期",
    keywords: ["Selma March", "civil rights", "voting"]
  },
  {
    year: "1966",
    event: "Black Panther Party founded",
    eventJa: "ブラック・パンサー党が設立される。急進的な黒人民族主義運動。",
    era: "冷戦期",
    keywords: ["Black Panthers", "civil rights", "radicalism"]
  },
  {
    year: "1967",
    event: "Summer of Love - counterculture movement",
    eventJa: "『愛の夏』で反文化運動が盛り上がる。ヒッピー文化とベトナム反戦活動が結合。",
    era: "冷戦期",
    keywords: ["Summer of Love", "counterculture", "hippies"]
  },
  {
    year: "1968",
    event: "Martin Luther King Jr. assassinated",
    eventJa: "マーティン・ルーサー・キング・Jr.が暗殺される。公民権運動に大きな打撃。",
    era: "冷戦期",
    keywords: ["MLK", "assassination", "civil rights"]
  },
  {
    year: "1968",
    event: "Robert Kennedy assassinated",
    eventJa: "ロバート・ケネディが暗殺される。アメリカの暴力が続く。",
    era: "冷戦期",
    keywords: ["Robert Kennedy", "assassination", "death"]
  },
  {
    year: "1968",
    event: "Tet Offensive in Vietnam",
    eventJa: "ベトナムでテト攻勢が発生。北ベトナム軍の大規模な軍事行動。",
    era: "冷戦期",
    keywords: ["Tet Offensive", "Vietnam", "military"]
  },
  {
    year: "1968",
    event: "Richard Nixon elected president",
    eventJa: "リチャード・ニクソンが第37代大統領に選出される。『沈黙の多数派』に支持されて勝利。",
    era: "冷戦期",
    keywords: ["Nixon", "election", "president"]
  },
  {
    year: "1969",
    event: "Apollo 11 Moon landing",
    eventJa: "アポロ11号が月面に着陸。ニール・アームストロングが人類初の月面歩行を実現。",
    era: "冷戦期",
    keywords: ["Apollo 11", "moon landing", "space"]
  },
  {
    year: "1969",
    event: "Woodstock music festival",
    eventJa: "ウッドストック音楽祭が開催。青年文化の象徴的イベント。",
    era: "冷戦期",
    keywords: ["Woodstock", "music", "counterculture"]
  },
  {
    year: "1970",
    event: "Kent State shootings",
    eventJa: "ケント州立大学銃撃事件が起こる。ベトナム反戦活動中の学生が兵士に撃たれる。",
    era: "冷戦期",
    keywords: ["Kent State", "Vietnam", "protest"]
  },
  {
    year: "1971",
    event: "Pentagon Papers released",
    eventJa: "ペンタゴン・ペーパーズが公開される。ベトナム戦争の秘密が暴露される。",
    era: "冷戦期",
    keywords: ["Pentagon Papers", "Vietnam", "disclosure"]
  },
  {
    year: "1972",
    event: "Richard Nixon reelected in landslide",
    eventJa: "ニクソン大統領が圧倒的勝利で再選。直後にウォーターゲート事件が発覚。",
    era: "冷戦期",
    keywords: ["Nixon", "election", "reelection"]
  },
  {
    year: "1973",
    event: "Vietnam War ceasefire agreement",
    eventJa: "ベトナム戦争の停戦協定が署名される。アメリカ軍の本格的撤退が始まる。",
    era: "冷戦期",
    keywords: ["Vietnam", "ceasefire", "agreement"]
  },
  {
    year: "1973",
    event: "Roe v. Wade decision - abortion legalized",
    eventJa: "ロー事件判決で妊娠中絶の権利が認められる。女性の権利に関する重要な判決。",
    era: "冷戦期",
    keywords: ["Roe v. Wade", "abortion", "women's rights"]
  },
  {
    year: "1974",
    event: "Watergate scandal - Nixon resigns",
    eventJa: "ウォーターゲート事件でニクソン大統領が辞任。憲政史上初の大統領辞職。",
    era: "冷戦期",
    keywords: ["Watergate", "scandal", "resignation"]
  },
  {
    year: "1974",
    event: "Gerald Ford becomes president",
    eventJa: "ジェラルド・フォードが第38代大統領となる。アメリカ再建の時代が始まる。",
    era: "冷戦期",
    keywords: ["Ford", "president", "succession"]
  },
  {
    year: "1975",
    event: "Vietnam War ends - North Vietnam wins",
    eventJa: "ベトナム戦争が北ベトナムの勝利で終結。サイゴン陥落。",
    era: "冷戦期",
    keywords: ["Vietnam War", "end", "North Vietnam"]
  },
  {
    year: "1976",
    event: "Jimmy Carter elected president",
    eventJa: "ジミー・カーターが第39代大統領に選出される。南部からの大統領誕生。",
    era: "冷戦期",
    keywords: ["Carter", "election", "president"]
  },
  {
    year: "1978",
    event: "Camp David Accords signed",
    eventJa: "キャンプ・デービッド協定が署名される。イスラエルとエジプトの平和条約。",
    era: "冷戦期",
    keywords: ["Camp David", "Israel", "Egypt"]
  },
  {
    year: "1979",
    event: "Iranian Revolution - Shah overthrown",
    eventJa: "イラン革命が起こり、シャーが転覆。イスラム共和国が成立。",
    era: "冷戦期",
    keywords: ["Iranian Revolution", "Iran", "Khomeini"]
  },
  {
    year: "1979",
    event: "Iran hostage crisis begins",
    eventJa: "イラン人質事件が始まる。アメリカ大使館の外交官が人質に取られる。",
    era: "冷戦期",
    keywords: ["Iran hostage crisis", "Iran", "diplomacy"]
  },
  {
    year: "1980",
    event: "Ronald Reagan elected president",
    eventJa: "ロナルド・レーガンが第40代大統領に選出される。保守的な政治転換が始まる。",
    era: "冷戦期",
    keywords: ["Reagan", "election", "conservative"]
  },
  {
    year: "1981",
    event: "Ronald Reagan inaugurated; 'Evil Empire' speech",
    eventJa: "レーガン大統領が就任。ソビエト連邦を『悪の帝国』と呼び、冷戦の激化を宣言。",
    era: "冷戦期",
    keywords: ["Reagan", "Evil Empire", "Cold War"]
  },
  {
    year: "1983",
    event: "Strategic Defense Initiative proposed",
    eventJa: "戦略防衛構想（SDI）が提案される。ソビエト核戦力への対抗。",
    era: "冷戦期",
    keywords: ["SDI", "missile defense", "nuclear"]
  },
  {
    year: "1985",
    event: "Mikhail Gorbachev becomes Soviet leader",
    eventJa: "ミハイル・ゴルバチョフがソビエト連邦の指導者となる。改革と改善のプロセスが開始。",
    era: "冷戦期",
    keywords: ["Gorbachev", "Soviet Union", "reform"]
  },
  {
    year: "1986",
    event: "Chernobyl nuclear disaster",
    eventJa: "チェルノブイリ原発事故が発生。大規模な核汚染が広がる。",
    era: "冷戦期",
    keywords: ["Chernobyl", "nuclear", "disaster"]
  },
  {
    year: "1987",
    event: "Reagan and Gorbachev sign INF Treaty",
    eventJa: "レーガンとゴルバチョフが中距離核戦力全廃条約に署名。冷戦緩和が進む。",
    era: "冷戦期",
    keywords: ["INF Treaty", "arms control", "Cold War"]
  },
  {
    year: "1989",
    event: "Fall of Berlin Wall",
    eventJa: "ベルリンの壁が崩壊。東西ドイツの統一が加速。冷戦終焉の象徴。",
    era: "冷戦期",
    keywords: ["Berlin Wall", "Cold War", "reunification"]
  },
  {
    year: "1989",
    event: "Tiananmen Square massacre",
    eventJa: "天安門広場事件が発生。中国政府による民主化要求者への弾圧。",
    era: "冷戦期",
    keywords: ["Tiananmen Square", "China", "massacre"]
  },
  {
    year: "1990",
    event: "Iraqi invasion of Kuwait",
    eventJa: "イラクがクウェートに侵攻。湾岸戦争への道が開かれる。",
    era: "冷戦期",
    keywords: ["Kuwait", "Iraq", "invasion"]
  },
  {
    year: "1991",
    event: "Gulf War - Operation Desert Storm",
    eventJa: "湾岸戦争が起こる。アメリカ率いる多国籍軍がイラク軍を撃破。",
    era: "冷戦期",
    keywords: ["Gulf War", "Iraq", "military"]
  },
  {
    year: "1991",
    event: "Soviet Union dissolves",
    eventJa: "ソビエト連邦が解体。冷戦が正式に終結。",
    era: "冷戦期",
    keywords: ["Soviet Union", "dissolution", "Cold War"]
  },

  // 現代 (Modern Era, 1991-present)
  {
    year: "1992",
    event: "Bill Clinton elected president",
    eventJa: "ビル・クリントンが第42代大統領に選出される。民主党による政権交代。",
    era: "現代",
    keywords: ["Clinton", "election", "president"]
  },
  {
    year: "1993",
    event: "World Trade Center bombing",
    eventJa: "ワールド・トレード・センターで爆弾テロが起こる。6人が死亡。",
    era: "現代",
    keywords: ["terrorism", "WTC", "bombing"]
  },
  {
    year: "1993",
    event: "North American Free Trade Agreement (NAFTA)",
    eventJa: "北米自由貿易協定（NAFTA）が発効。アメリカ、カナダ、メキシコの経済統合。",
    era: "現代",
    keywords: ["NAFTA", "trade", "agreement"]
  },
  {
    year: "1995",
    event: "Oklahoma City bombing",
    eventJa: "オクラホマシティ連邦政府ビル爆弾テロが起こる。多数の死傷者。",
    era: "現代",
    keywords: ["terrorism", "bombing", "Oklahoma"]
  },
  {
    year: "1996",
    event: "Bill Clinton reelected president",
    eventJa: "クリントン大統領が再選。経済成長の時代が続く。",
    era: "現代",
    keywords: ["Clinton", "election", "reelection"]
  },
  {
    year: "1998",
    event: "Clinton impeached by House",
    eventJa: "クリントン大統領が弾劾される。性スキャンダルが政治を揺るがす。",
    era: "現代",
    keywords: ["Clinton", "impeachment", "scandal"]
  },
  {
    year: "2000",
    event: "Presidential election disputed - Bush v. Gore",
    eventJa: "大統領選挙が争点化。フロリダの投票結果を巡る法的闘争。",
    era: "現代",
    keywords: ["election", "Bush v. Gore", "Florida"]
  },
  {
    year: "2001",
    event: "9/11 terrorist attacks",
    eventJa: "9・11テロ攻撃が起こる。テロ組織アル・カイダがニューヨークとワシントンを攻撃。",
    era: "現代",
    keywords: ["9/11", "terrorism", "al-Qaeda"]
  },
  {
    year: "2001",
    event: "United States invades Afghanistan",
    eventJa: "アメリカがアフガニスタンに侵攻。テロとの戦争が本格化。",
    era: "現代",
    keywords: ["Afghanistan", "war", "terrorism"]
  },
  {
    year: "2003",
    event: "United States invades Iraq",
    eventJa: "アメリカがイラクに侵攻。大量破壊兵器の存在が根拠とされる。",
    era: "現代",
    keywords: ["Iraq War", "invasion", "WMD"]
  },
  {
    year: "2004",
    event: "George W. Bush reelected president",
    eventJa: "ジョージ・W・ブッシュが大統領に再選。イラク戦争継続が争点。",
    era: "現代",
    keywords: ["Bush", "election", "reelection"]
  },
  {
    year: "2008",
    event: "Financial crisis - Great Recession begins",
    eventJa: "金融危機が発生。リーマン・ショックで世界経済が震撼。",
    era: "現代",
    keywords: ["financial crisis", "recession", "economy"]
  },
  {
    year: "2008",
    event: "Barack Obama elected first African American president",
    eventJa: "バラク・オバマが初のアフリカ系アメリカ人大統領に選出される。歴史的な選挙。",
    era: "現代",
    keywords: ["Obama", "election", "African American"]
  },
  {
    year: "2009",
    event: "American Recovery and Reinvestment Act",
    eventJa: "アメリカ回復・再投資法が可決。経済危機への対応措置。",
    era: "現代",
    keywords: ["stimulus", "economic", "recovery"]
  },
  {
    year: "2010",
    event: "Affordable Care Act passed",
    eventJa: "医療改革法（オバマケア）が可決。国民皆保険制度に向けた改革。",
    era: "現代",
    keywords: ["Affordable Care Act", "healthcare", "reform"]
  },
  {
    year: "2011",
    event: "Osama bin Laden killed",
    eventJa: "オサマ・ビン・ラディンが殺害される。9・11テロの首謀者に終止符。",
    era: "現代",
    keywords: ["bin Laden", "al-Qaeda", "death"]
  },
  {
    year: "2012",
    event: "Barack Obama reelected president",
    eventJa: "オバマ大統領が再選。民主党による継続統治。",
    era: "現代",
    keywords: ["Obama", "election", "reelection"]
  },
  {
    year: "2013",
    event: "Government shutdown over Affordable Care Act",
    eventJa: "医療改革法をめぐる党派対立で政府が閉鎖。",
    era: "現代",
    keywords: ["government shutdown", "politics", "gridlock"]
  },
  {
    year: "2014",
    event: "Russian annexation of Crimea",
    eventJa: "ロシアがクリミアを併合。ウクライナへの軍事行動。",
    era: "現代",
    keywords: ["Russia", "Crimea", "Ukraine"]
  },
  {
    year: "2016",
    event: "Donald Trump elected president",
    eventJa: "ドナルド・トランプが第45代大統領に選出される。不動産ビジネスマンから政治家へ。",
    era: "現代",
    keywords: ["Trump", "election", "president"]
  },
  {
    year: "2017",
    event: "Women's March against Trump",
    eventJa: "トランプ大統領就任に反対する女性行進が開催。大規模な抗議運動。",
    era: "現代",
    keywords: ["Women's March", "protest", "feminism"]
  },
  {
    year: "2017",
    event: "Hurricane Harvey devastates Texas",
    eventJa: "ハリケーン・ハービーがテキサスを襲撃。大規模な災害と避難。",
    era: "現代",
    keywords: ["Hurricane Harvey", "disaster", "climate"]
  },
  {
    year: "2018",
    event: "Midterm elections - Democrats gain House",
    eventJa: "中間選挙で民主党が下院をコントロール。トランプへの対抗勢力が強化。",
    era: "現代",
    keywords: ["midterm election", "Congress", "politics"]
  },
  {
    year: "2019",
    event: "Trump impeached by House",
    eventJa: "トランプ大統領が弾劾される。ウクライナ疑惑が原因。",
    era: "現代",
    keywords: ["Trump", "impeachment", "Ukraine"]
  },
  {
    year: "2020",
    event: "COVID-19 pandemic spreads across United States",
    eventJa: "COVID-19パンデミックが全米に拡大。経済と社会が大混乱。",
    era: "現代",
    keywords: ["COVID-19", "pandemic", "health"]
  },
  {
    year: "2020",
    event: "Black Lives Matter protests",
    eventJa: "ブラック・ライブズ・マター運動が全米で拡大。警察による黒人殺害への抗議。",
    era: "現代",
    keywords: ["Black Lives Matter", "civil rights", "protest"]
  },
  {
    year: "2020",
    event: "Joe Biden elected president",
    eventJa: "ジョー・バイデンが第46代大統領に選出される。トランプの後継者不在で交代。",
    era: "現代",
    keywords: ["Biden", "election", "president"]
  },
  {
    year: "2021",
    event: "Capitol riot - January 6 insurrection",
    eventJa: "連邦議会議事堂が暴徒に占拠される。民主的プロセスへの脅威。",
    era: "現代",
    keywords: ["Capitol riot", "insurrection", "January 6"]
  },
  {
    year: "2021",
    event: "American Rescue Plan approved",
    eventJa: "アメリカ救済計画が可決。パンデミック経済対策。",
    era: "現代",
    keywords: ["stimulus", "economic", "pandemic"]
  },
  {
    year: "2022",
    event: "Inflation reaches 40-year high",
    eventJa: "インフレーションが40年ぶりの高水準に達する。経済的圧力が増加。",
    era: "現代",
    keywords: ["inflation", "economy", "crisis"]
  },
  {
    year: "2022",
    event: "Midterm elections - Republicans gain House",
    eventJa: "中間選挙で共和党が下院をコントロール。政治のねじれが加速。",
    era: "現代",
    keywords: ["midterm election", "Congress", "politics"]
  },
  {
    year: "2023",
    event: "ChatGPT and AI surge in popularity",
    eventJa: "ChatGPTなどAI技術が急速に普及。社会と労働の在り方が問われる。",
    era: "現代",
    keywords: ["AI", "technology", "innovation"]
  },
  {
    year: "2024",
    event: "Donald Trump reelected president",
    eventJa: "ドナルド・トランプが第47代大統領に再選。共和党の政権復帰。",
    era: "現代",
    keywords: ["Trump", "election", "president"]
  },
  {
    year: "2024",
    event: "Growing political polarization and cultural wars",
    eventJa: "政治的分極化と文化戦争が加速。アメリカ社会の分裂が深刻化。",
    era: "現代",
    keywords: ["polarization", "politics", "culture"]
  }
];
