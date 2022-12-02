<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER B" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="A PREND_LA_VALEUR 10" code="5#A#10#pasliste"/>
        <item algoitem="AFFICHER A" code="3#A#1#pasliste"/>
        <item algoitem="LIRE B" code="2#B#pasliste"/>
        <item algoitem="AFFICHER &quot;B vaut &quot;" code="4#B vaut #0"/>
        <item algoitem="AFFICHER B" code="3#B#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
