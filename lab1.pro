domains
database
xpositive(symbol,symbol)
xnegative(symbol,symbol)
predicates
do_expert_bird.
do_consulting
ask(symbol,symbol)
monitor_is(symbol)
positive(symbol,symbol)
negative(symbol,symbol)
remember(symbol,symbol,symbol)
clear_facts
goal
do_expert_bird.
clauses

do_expert_bird:-
makewindow(1,7,7,"Expert System",1,3,22,71),
nl,write(" ---------------------------------------------------"),
nl,write(" A Monitor Expert "),nl,write("   "),
nl,write(" Please answer the questions 'yes' or 'no'."),
nl,write(" ---------------------------------------------------"),nl,nl,
do_consulting,
write("Press space bar."),nl,readchar(_),removewindow,
exit.

do_consulting:- monitor_is(X),!,nl,write("Monitor ",X,"."),nl,clear_facts.
do_consulting:-nl,write("Sorry !"),clear_facts.
ask(X,Y):-write(" expert> ",X," ",Y," ?"),readln(Reply),remember(X,Y,Reply).
positive(X,Y):-xpositive(X,Y),!.
positive(X,Y):-not(negative(X,Y)),!,ask(X,Y).
negative(X,Y):-xnegative(X,Y),!.
remember(X,Y,yes):-asserta(xpositive(X,Y)).
remember(X,Y,no):-asserta(xnegative(X,Y)),fail.
clear_facts:-retract(xpositive(_,_)),fail.
clear_facts:-retract(xnegative(_,_)),fail.

monitor_is("AOC e970Swn")       :- positive(firm,"AOC"),        positive(diagonal,"19"),            positive(technology,"TFT")
                                ,  positive(matrix,"TN+film"),  positive(resolution,"1366x768"),    positive(color,"Black"),!.

monitor_is("Asus VP228DE")      :- positive(firm,"Asus"),       positive(diagonal,"22"),            positive(technology,"LED")
                                ,  positive(matrix,"TN+film"),  positive(resolution,"1920x1080"),   positive(color,"Black"),!.

monitor_is("LG 19M38A-B")       :-  positive(firm,"LG"),        positive(diagonal,"19"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1366x768"),    positive(color,"Black"),!.
monitor_is("LG 20MK400A-B")     :-  positive(firm,"LG"),        positive(diagonal,"20"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1366x768"),    positive(color,"Black"),!.
monitor_is("LG 22M38A-B")       :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 22M38D-B")       :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"TFT")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 22MK400H-B")     :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 22MK430H-B")     :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 22MK600M-B")     :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Grey"),!.
monitor_is("LG 22MP48A-B")      :-  positive(firm,"LG"),        positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"AH-IPS"),  positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 23MP48HQ-B")     :-  positive(firm,"LG"),        positive(diagonal,"23"),            positive(technology,"LED")
                                ,   positive(matrix,"AH-IPS"),  positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 24M38A-B")       :-  positive(firm,"LG"),        positive(diagonal,"24"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 24MK430H-B")     :-  positive(firm,"LG"),        positive(diagonal,"24"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("LG 25UM58-B")       :-  positive(firm,"LG"),        positive(diagonal,"25"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"2560x1080"),   positive(color,"Black"),!.
monitor_is("LG 27MP58VQ-B")     :-  positive(firm,"LG"),        positive(diagonal,"27"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.

monitor_is("Philips 193V5LSB2") :-  positive(firm,"Philips"),   positive(diagonal,"19"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1366x768"),    positive(color,"Black"),!.
monitor_is("Philips 200V4LAB2") :-  positive(firm,"Philips"),   positive(diagonal,"20"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1440x900"),    positive(color,"Black"),!.
monitor_is("Philips 223S7EJMB") :-  positive(firm,"Philips"),   positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Philips 223V5LSB2") :-  positive(firm,"Philips"),   positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"White"),!.
monitor_is("Philips 241B7QPJEB"):-  positive(firm,"Philips"),   positive(diagonal,"24"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Philips 243V5QHSBA"):-  positive(firm,"Philips"),   positive(diagonal,"24"),            positive(technology,"LED")
                                ,   positive(matrix,"MVA"),     positive(resolution,"1920x1080"),   positive(color,"Gray"),!.
monitor_is("Philips 273V7QDAB") :-  positive(firm,"Philips"),   positive(diagonal,"27"),            positive(technology,"LED")
                                ,   positive(matrix,"IPS"),     positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Samsung S22E390HS") :-  positive(firm,"Samsung"),   positive(diagonal,"22"),            positive(technology,"LED")
                                ,   positive(matrix,"S-PLS"),   positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Samsung S24D300HS") :-  positive(firm,"Samsung"),   positive(diagonal,"24"),            positive(technology,"LED")
                                ,   positive(matrix,"TN+film"), positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Samsung S27F358F")  :-  positive(firm,"Samsung"),   positive(diagonal,"27"),            positive(technology,"LED")
                                ,   positive(matrix,"S-PLS"),   positive(resolution,"1920x1080"),   positive(color,"Black"),!.
monitor_is("Samsung C24F390FH") :-  positive(firm,"Samsung"),   positive(diagonal,"24"),            positive(technology,"CURVED LED")
                                ,   positive(matrix,"VA"),      positive(resolution,"1920x1080"),   positive(color,"White"),!.
monitor_is("Samsung C27F390F")  :-  positive(firm,"Samsung"),   positive(diagonal,"27"),            positive(technology,"CURVED LED")
                                ,   positive(matrix,"VA"),      positive(resolution,"1920x1080"),   positive(color,"Gray"),!.
monitor_is("Samsung LC27JG50Q") :-  positive(firm,"Samsung"),   positive(diagonal,"27"),            positive(technology,"CURVED LED")
                                ,   positive(matrix,"VA"),      positive(resolution,"2560x1440"),   positive(color,"Gray"),!.
