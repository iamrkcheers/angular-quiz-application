app.factory("footballfactory", function () {
    var obj = {

        quizActive: false,
        resultsActive: false,
        numCorrectAns: 0,
        ca: [],

        changeState: function (metric, state) {
            if (metric === "quiz") {
                obj.quizActive = state;
            } else if (metric === "results") {
                obj.resultsActive = state;
            } else {
                return false;
            }
        },

        markQuiz: function () {
            obj.ca = obj.correctAns;
            for (var i = 0; i < obj.ques.length; i++) {
                if (obj.ques[i].selected === obj.correctAns[i]) {
                    obj.ques[i].correct = true;
                    obj.numCorrectAns++;
                } else {
                    obj.ques[i].correct = false;
                }
            }
        },

        correctAns: [0, 1, 1, 3, 3, 2, 1, 3, 0, 0],

        ques: [

            {
                type: "text",
                text: "Who is the winner of Ballon D'or for the maximum no. of times ?",
                options: [{
                    answer: "Lionel Messi"
                }, {
                    answer: "Cristiano Ronaldo"
                }, {
                    answer: "Pele"
                }, {
                    answer: "Diego Maradona"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who is the captain of Portugal national football team ?",
                options: [{
                    answer: "Lionel Messi"
                }, {
                    answer: "Cristiano Ronaldo"
                }, {
                    answer: "Luis Figo"
                }, {
                    answer: "Luis Nani"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who holds the record for the maximum goals scored in one 'Uefa Champions League' season ?",
                options: [{
                    answer: "Lionel Messi"
                }, {
                    answer: "Cristiano Ronaldo"
                }, {
                    answer: "Zlatan Ibrahimovic"
                }, {
                    answer: "Ronaldinho"
                }],
                selected: null,
                correct: null
        },
            {
                type: "image",
                text: "Who is also famously known as 'The White Pele' ?",
                options: [{
                    answer: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Gareth-Bale-597141.jpg"
                }, {
                    answer: "http://healthyceleb.com/wp-content/uploads/2015/12/Neymar-Jr.jpg"
                }, {
                    answer: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Hazard-593798.jpg"
                }, {
                    answer: "https://waynefarry.files.wordpress.com/2015/11/wpid-wayne-rooney-601018.jpg"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who scored the winning goal in the 'Fifa World Cup 2012' final ?",
                options: [{
                    answer: "Inzaghi"
                }, {
                    answer: "Bruno Alves"
                }, {
                    answer: "Zlatan Ibrahimovic"
                }, {
                    answer: "Andres Iniesta"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who is the legendary Manchester United player who holds the record for maximum Premier League appearances ?",
                options: [{
                    answer: "David Beckham"
                }, {
                    answer: "Paul Scholes"
                }, {
                    answer: "Ryan Giggs"
                }, {
                    answer: "Eric Cantona"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who was the first English Premier League player to win the 'World Player of the year award' ?",
                options: [{
                    answer: "Lionel Messi"
                }, {
                    answer: "Cristiano Ronaldo"
                }, {
                    answer: "Zlatan Ibrahimovic"
                }, {
                    answer: "Ronaldinho"
                }],
                selected: null,
                correct: null
        },
            {
                type: "image",
                text: "Who scored the winner against Germany in the 'Uefa Euro 2008' ?",
                options: [{
                    answer: "http://e0.365dm.com/15/10/768x432/sergio-aguero-manchester-city_3358974.jpg?20151003235610"
                }, {
                    answer: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Robert-Lewandowski-615680.jpg"
                }, {
                    answer: "https://waynefarry.files.wordpress.com/2015/11/wpid-wayne-rooney-601018.jpg"
                }, {
                    answer: "http://ste.india.com/sites/default/files/2016/02/07/458133-fernando-torres-scream-cele.jpg"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Who holds the record for maximum goals in a calender year ?",
                options: [{
                    answer: "Lionel Messi"
                }, {
                    answer: "Cristiano Ronaldo"
                }, {
                    answer: "Zlatan Ibrahimovic"
                }, {
                    answer: "Ronaldinho"
                }],
                selected: null,
                correct: null
        },
            {
                type: "text",
                text: "Which club is the holder of the 'Uefa Champions League' for the maximum number times?",
                options: [{
                    answer: "Real Madrid"
                }, {
                    answer: "FC Barcelona"
                }, {
                    answer: "Inter Milan"
                }, {
                    answer: "AC Milan"
                }],
                selected: null,
                correct: null
        }

        ],

        show: function () {

            var abc = [

                {
                    name: "Cristiano Ronaldo",
                    image: "http://1.bp.blogspot.com/-vspgVT8vnOM/UMJOWUZ3itI/AAAAAAAAI9w/mmvHdUhLOio/s1600/Cristiano+Ronaldo+Advance+HD+Wallpaper+2013+02.jpg",
                    team: "Real Madrid CF",
                    country: "Portugal",
                    dob: "Feb 5, 1985 (Age 31)",
                    position: "Forward",
                    description: "Cristiano Ronaldo dos Santos Aveiro, is a Portuguese professional footballer who plays for Spanish club Real Madrid and the Portugal national team. He is a forward and serves as captain for Portugal. In 2008, he won his first Ballon d'Or and FIFA World Player of the Year awards. He then won the FIFA Ballon d'Or in 2013 and 2014. In 2015, Ronaldo scored his 500th senior career goal for club and country. Often ranked as the best player in the world, Ronaldo was named the best Portuguese player of all time by the Portuguese Football Federation, during its 100th anniversary celebrations in 2015. He is the only player to win four European Golden Shoe awards. One of the most marketable athletes in sport, in 2016 Forbes named Ronaldo the world's best paid athlete. In June 2016, ESPN ranked him the world's most famous athlete."
                },

                {
                    name: "Lionel Messi",
                    image: "http://img.bleacherreport.net/img/images/photos/003/573/799/hi-res-78bd88e8dd58884ea4ea92fa892f39b0_crop_north.jpg?w=630&h=420&q=75",
                    team: "FC Barcelona",
                    country: "Argentina",
                    dob: "Jun 24, 1987 (Age 29)",
                    position: "Forward",
                    description: "Lionel Andrés Leo Messi, is an Argentine professional footballer who plays as a forward for Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and rated by many in the sport as the greatest of all time, Messi is the only football player in history to win five FIFA Ballons d'Or, four of which he won consecutively, and the first player to win three European Golden Shoes. With Barcelona he has won eight La Liga titles and four UEFA Champions League titles, as well as four Copas del Rey. A prolific goalscorer, Messi holds the records for most goals scored in La Liga, a La Liga season (50), a calendar year (91), a single season (73), a Champions League match (5), and most Champions League seasons (5)."
                },

                {
                    name: "Gareth Bale",
                    image: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Gareth-Bale-597141.jpg",
                    team: "Real Madrid CF",
                    country: "Wales",
                    dob: "Jul 16, 1989 (Age 26)",
                    position: "Midfielder",
                    description: "Gareth Frank Bale is a Welsh professional footballer who plays as a winger for Spanish club Real Madrid and the Wales national team. Renowned for his ball striking from distance, swerving free kicks, and his ability to get past defenders with pace, Bale has received plaudits from his peers, who have described him as a footballer with tremendous speed, great crossing ability, a great left foot and exceptional physical qualities.He began his professional career at Southampton, playing at left-back and earning acclaim as a free kick specialist. Bale moved to Tottenham Hotspur in 2007, for an eventual £7 million fee. During his time at Tottenham, managerial and tactical shifts saw him transform into a more attacking player. From the 2009–10 season, under the guidance of Harry Redknapp, Bale became an integral part of the team, rising to international attention during the 2010–11 UEFA Champions League. In 2011 and 2013 he was named PFA Players' Player of the Year, and was named in the UEFA Team of the Year. In 2013 he was also named PFA Young Player of the Year and the FWA Footballer of the Year."
                },

                {
                    name: "Neymar jr.",
                    image: "http://healthyceleb.com/wp-content/uploads/2015/12/Neymar-Jr.jpg",
                    team: "FC Barcelona",
                    country: "Brazil",
                    dob: "Feb 5, 1992 (Age 24)",
                    position: "Forward",
                    description: "Neymar da Silva Santos Júnior, commonly known as Neymar or Neymar Jr., is a Brazilian professional footballer who plays for Spanish club FC Barcelona and the Brazil national team as a forward or winger, and is also the captain of the national team.At the age of 19, Neymar won the 2011 South American Footballer of the Year award, after coming third in 2010. He followed this up by winning it again in 2012. In 2011 Neymar won the FIFA Puskás Award for Goal of the Year. In 2015 he came third for the FIFA Ballon d'Or behind Lionel Messi and Cristiano Ronaldo. Neymar is known for his acceleration, dribbling skills, finishing and ability with both feet. His playing style has earned him critical acclaim, with fans, media and former players drawing comparison to former Brazil forward Pelé, who has called Neymar an excellent player, while Ronaldo, Ronaldinho and Lionel Messi have stated he will be the best in the world."
                },

                {
                    name: "Fernando Torres",
                    image: "http://ste.india.com/sites/default/files/2016/02/07/458133-fernando-torres-scream-cele.jpg",
                    team: "Atletico Madrid FC",
                    country: "Spain",
                    dob: "Mar 20, 1984 (Age 32)",
                    position: "Forward",
                    description: "Fernando José Torres Sanz is a Spanish professional footballer who plays as a striker for La Liga club Atlético Madrid, on loan from Serie A club Milan.Torres started his career with Atlético Madrid, progressing through their youth system to the first team squad. He made his first team debut in 2001 and finished his time at the club having scored 75 goals in 174 La Liga appearances. Prior to his La Liga debut, Torres played two seasons in the Segunda División for Atlético Madrid, making 40 appearances and scoring seven goals.Torres joined Premier League club Liverpool in 2007, after signing for a club record transfer fee. He marked his first season at Anfield by being Liverpool's first player since Robbie Fowler in the 1995–96 season to score more than 20 league goals in a season. The most prolific goalscoring spell of his career, he became the fastest player in Liverpool history to score 50 league goals. He was named in the FIFA World XI in 2008 and 2009. Torres left the club in January 2011 to join Chelsea for a British record transfer fee of £50 million, which made him the most expensive Spanish player in history. In his first full season at Chelsea, Torres won the FA Cup and the UEFA Champions League, despite receiving criticism for a comparatively low goal-scoring record. The following season he scored in the final of the 2012–13 UEFA Europa League, helping Chelsea to win the competition for the first time."
                },

                {
                    name: "Wayne Rooney",
                    image: "https://waynefarry.files.wordpress.com/2015/11/wpid-wayne-rooney-601018.jpg",
                    team: "Manchester United FC",
                    country: "England",
                    dob: "Oct 24, 1985 (Age 30)",
                    position: "Forward",
                    description: "Wayne Mark Rooney is an English professional footballer who plays for and captains both Manchester United and the England national team. He has played much of his career as a forward, but he has also been used in various midfield roles.Aged nine, Rooney joined the youth team of Everton, for whom he made his professional debut in 2002 at the age of 16. He spent two seasons at the Merseyside club, before moving to Manchester United for £25.6 million in the 2004 summer transfer window. Since then, with Rooney in the team, United have won the Premier League five times, the UEFA Champions League once, the FIFA Club World Cup once, the FA Community Shield three times, the Football League Cup twice and the FA Cup once. In September 2013, Rooney scored his 200th goal for Manchester United. He is currently on 244 goals, making him the club's second top goalscorer of all time. His 192 Premier League goals make him the competition's second top scorer of all time, and he holds the record for most goals for one club in the Premier League, with 177 for Manchester United."
                },

                {
                    name: "Eden Hazard",
                    image: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Hazard-593798.jpg",
                    team: "Chelsea FC",
                    country: "Belgium",
                    dob: "Jan 7, 1991 (Age 25)",
                    position: "Midfielder",
                    description: "Eden Michael Hazard is a Belgian professional footballer who plays for Chelsea and the Belgium national team. He primarily plays as an attacking midfielder and a winger. Hazard's creativity, speed, and technical ability are widely acknowledged. He has been described as a superb passer and has earned critical acclaim for his playing style, which has led to the media, coaches, and players drawing comparisons to FIFA Ballon d'Or winners Lionel Messi and Cristiano Ronaldo. Hazard is often ranked by coaches, colleagues, and commentators as one of the best players in the world.Hazard is the son of former Belgian footballers and began his football career in Belgium playing for local clubs Royal Stade Brainois and Tubize. In 2005, he moved to France joining first division club Lille. Hazard spent two years in the club's academy and, at the age of 16, made his professional debut in November 2007. He went on to become an integral part of Lille under manager Rudi Garcia, racking up over 190 appearances. In his first full season as a starter, he won the National Union of Professional Footballers (UNFP) Young Player of the Year award becoming the first non-French player to win the award. In the 2009–10 season, Hazard captured the award again becoming the first player to win the award twice. He was also named to the league's Team of the Year."
                },

                {
                    name: "Sergio Aguero",
                    image: "http://e0.365dm.com/15/10/768x432/sergio-aguero-manchester-city_3358974.jpg?20151003235610",
                    team: "Manchester City FC",
                    country: "Argentina",
                    dob: "Jun 2, 1988 (Age 28)",
                    position: "Forward",
                    description: "Sergio Leonel Kun Agüero is an Argentine professional footballer who plays as a striker for English club Manchester City and the Argentina national team. On 5 July 2003, he became the youngest player to debut in the Argentine Primera División at 15 years and 35 days, breaking the record previously established by Diego Maradona in 1976.In 2006, Agüero moved to Europe to play for La Liga side Atlético Madrid, with Independiente accepting a fee of €23 million. He made a name for himself, attracting attention from Europe's top clubs by scoring 101 goals in 234 appearances while winning the UEFA Europa League and the UEFA Super Cup in 2010. Agüero moved to Premier League club Manchester City in July 2011 for an undisclosed fee thought to be in the region of £35 million. On the last day of his debut season with the club, Agüero scored a 94th-minute winner against Queens Park Rangers that earned City its first league title in 44 years. At the end of the 2014–15 season, of players who had played at least two seasons in the Premier League, Agüero had the highest goals per minute ratio in the history of the competition since its formation in 1992, averaging a goal every 109 minutes. He also holds the joint-record for the most goals scored in a single Premier League match – five – and the fastest to do so, in 23 minutes and 34 seconds of match time. He is the highest South American scorer in the history of the Premier League, and reached 100 goals in the division faster than any player other than Alan Shearer."
                },

                {
                    name: "Robert Lewandowski",
                    image: "http://cdn.images.express.co.uk/img/dynamic/67/590x/Robert-Lewandowski-615680.jpg",
                    team: "Bayern Munich FC",
                    country: "Poland",
                    dob: "Aug 21, 1988 (Age 27)",
                    position: "Forward",
                    description: "Robert Lewandowski is a Polish professional footballer who plays as a striker for German club Bayern Munich, and captains the Poland national team.After being the top scorer in the third and second tiers of Polish football with Znicz Pruszków, he moved to top-flight Lech Poznań, and was the top scorer in the league as they won the 2009–10 Ekstraklasa. In 2010, he transferred to Borussia Dortmund for a reported €4.5 million, where he won honours including two consecutive Bundesliga titles. Before the start of the 2014 season, he moved to their rivals Bayern Munich, where he won the Bundesliga in each of his first two campaigns. He has totalled over 100 goals in Germany's top division, and reached the century mark quicker than any other foreign player."
                },

                {
                    name: "Marco Reus",
                    image: "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/2355290/0711220001464198262_filepicker.jpg",
                    team: "Borussia Dortmund FC",
                    country: "Germany",
                    dob: "May 31, 1989 (Age 27)",
                    position: "Midfielder",
                    description: "Marco Reus, is a German professional footballer who plays as an attacking midfielder, winger or striker for German club Borussia Dortmund and the Germany national team. Reus is known for his versatility, speed and technique.Reus spent his youth career at Borussia Dortmund, prior to leaving for Rot Weiss Ahlen. He has played for three clubs in his senior career, most notably—and with the most influence—in Borussia Mönchengladbach of the Bundesliga. Reus plays primarily as a left attacker for BVB; however, he is capable of playing on the right also and through the middle, due to his ability to closely control the ball with both feet. 2012 was his most successful season when, scoring 18 and assisting eight, he helped Borussia Mönchengladbach secure a place in the following season's UEFA Champions League. Reus agreed a move to his home club Borussia Dortmund at the end of that season. Reus wears number 11 for Dortmund."
                }

        ];

            return abc;

        }
    };
    return obj;
});