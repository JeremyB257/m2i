<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;s&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="H EST_DU_TYPE NOMBRE" code="1#NOMBRE#H"/>
        <item algoitem="M EST_DU_TYPE NOMBRE" code="1#NOMBRE#M"/>
        <item algoitem="S EST_DU_TYPE NOMBRE" code="1#NOMBRE#S"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE S" code="2#S#pasliste"/>
        <item algoitem="H PREND_LA_VALEUR floor(S/3600)" code="5#H#floor(S/3600)#pasliste"/>
        <item algoitem="M PREND_LA_VALEUR floor((S - H * 3600) /60)" code="5#M#floor((S - H * 3600) /60)#pasliste"/>
        <item algoitem="S PREND_LA_VALEUR S - H *3600 - M * 60" code="5#S#S - H *3600 - M * 60#pasliste"/>
        <item algoitem="AFFICHER H" code="3#H#0#pasliste"/>
        <item algoitem="AFFICHER &quot;h&quot;" code="4#h#0"/>
        <item algoitem="AFFICHER M" code="3#M#0#pasliste"/>
        <item algoitem="AFFICHER &quot;m&quot;" code="4#m#0"/>
        <item algoitem="AFFICHER S" code="3#S#0#pasliste"/>
        <item algoitem="AFFICHER &quot;s&quot;" code="4#s#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
