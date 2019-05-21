DOMAINS
	s=symbol
	str = string
	int = integer

DATABASE
	 xpositive(s,int)
 	 xnegative(s,int)

PREDICATES

 	do_expert_illness
 	do_consulting
 	ask(symbol,s,int)
	monitor_is(s,int)
	positive(s,s,int)
 	negative(s,s,int)
 	remember(s,s,s,int)
	becauseof 
	min(int,int,int)
	getku(int,int,int)
	askku(int)

GOAL

 	do_expert_illness.

CLAUSES

 	 do_expert_illness:-makewindow(1,7,7,"Expert System",1,3,22,71),
  	 nl,write(" ---------------------------------------------------"),
  	 nl,write(" Medical expert "),nl,write("   "),
	 nl,write(" ---------------------------------------------------"),nl,nl,
	 do_consulting,write("Press space bar."),nl,readchar(_),removewindow,exit. 
 	
 do_consulting:-monitor_is(X,KU),!,nl,write("U Vas ",X,"(",KU,"%)","."),nl,becauseof.
 do_consulting:-nl,write("Sorry !"),nl,becauseof.

 ask(X,Y,KU):-write("expert> ",X," ",Y,"? "),readln(Reply),askku(KU),remember(X,Y,Reply,KU).

 positive(_,Y,KU):-xpositive(Y,KU),!.
 positive(X,Y,KU):-not(negative(X,Y,_)),!,ask(X,Y,KU).

 negative(_,Y,KU):-xnegative(Y,KU),!.

 remember(_,Y,yes,KU):-asserta(xpositive(Y,KU)).
 remember(_,Y,no,KU):-asserta(xnegative(Y,KU)),fail.


monitor_is("AOC e970Swn",       KURes):-  positive(firm,"AOC",  KU1),
    positive(diagonal,"19",     KU2),       min(KU1,KU2,KU3),   positive(technology,"TFT", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1366x768", KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("Asus VP228DE",      KURes):-  positive(firm,"Asus", KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 19M38A-B",       KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"19",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1366x768", KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 20MK400A-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"20",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1366x768", KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22M38A-B",       KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22M38D-B",       KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"TFT", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22MK400H-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22MK430H-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"IPS",      KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22MK600M-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"IPS",      KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Grey" ,     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 22MP48A-B",      KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"22",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"AH-IPS",   KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 23MP48HQ-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"23",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"AH-IPS",   KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 24M38A-B",       KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"24",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"TN+film",  KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 24MK430H-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"24",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"IPS",      KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 25UM58-B",       KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"25",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"IPS",      KU6),       min(KU5,KU6,KU6T),  positive(resolution,"2560x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),       getku(KU9,60,KURes),!.
monitor_is("LG 27MP58VQ-B",     KURes):-  positive(firm,"LG",   KU1),
    positive(diagonal,"27",     KU2),       min(KU1,KU2,KU3),   positive(technology,"LED", KU4),        min(KU3,KU4,KU5),
    positive(matrix,"IPS",      KU6),       min(KU5,KU6,KU6T),  positive(resolution,"1920x1080",KU5T),  min(KU5T,KU6T,KU7),
    positive(color,"Black",     KU8),       min(KU7,KU8,KU9),   getku(KU9,60,KURes),!.

becauseof :- xpositive(Str,KU), write("  + ",Str," (",KU,"%)","\n"), fail.
becauseof :- xnegative(Str,KU), write("  - ",Str," (",KU,"%)","\n"), fail.
becauseof :- retractall(_),!.   

min(KU1,KU2,KU1):-KU1 <= KU2,!.
min(KU1,KU2,KU2):-KU1 > KU2.

askku(KU):-write("  KU?(%)-"),readint(KU),KU<=100,KU>=0,!.
askku(KU):-write("  ! Only integer between 0 & 100 !\n"),askku(KU).

getku(KU1,KU2,KURes):- KURes=KU1*KU2/100.
