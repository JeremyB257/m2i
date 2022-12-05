<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER a"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
        <item algoitem="t EST_DU_TYPE NOMBRE" code="1#NOMBRE#t"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE a" code="2#a#pasliste"/>
        <item algoitem="LIRE b" code="2#b#pasliste"/>
        <item algoitem="TANT_QUE (b != 0) FAIRE" code="15#b != 0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="t PREND_LA_VALEUR b" code="5#t#b#pasliste"/>
            <item algoitem="b PREND_LA_VALEUR a % b" code="5#b#a % b#pasliste"/>
            <item algoitem="a PREND_LA_VALEUR t" code="5#a#t#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER a" code="3#a#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
