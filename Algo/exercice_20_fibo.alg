<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_POUR"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Nbr EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbr"/>
        <item algoitem="NbrPrev EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrPrev"/>
        <item algoitem="NbrPrevPrev EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrPrevPrev"/>
        <item algoitem="NbrCurr EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrCurr"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE Nbr" code="2#Nbr#pasliste"/>
        <item algoitem="NbrPrev PREND_LA_VALEUR 1" code="5#NbrPrev#1#pasliste"/>
        <item algoitem="AFFICHER NbrPrevPrev" code="3#NbrPrevPrev#0#pasliste"/>
        <item algoitem="AFFICHER &quot; &quot;" code="4# #0"/>
        <item algoitem="AFFICHER NbrPrev" code="3#NbrPrev#0#pasliste"/>
        <item algoitem="AFFICHER &quot; &quot;" code="4# #0"/>
        <item algoitem="POUR i ALLANT_DE 0 A Nbr -2" code="12#i#0#Nbr -2">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="NbrCurr PREND_LA_VALEUR NbrPrev + NbrPrevPrev" code="5#NbrCurr#NbrPrev + NbrPrevPrev#pasliste"/>
            <item algoitem="NbrPrevPrev PREND_LA_VALEUR NbrPrev" code="5#NbrPrevPrev#NbrPrev#pasliste"/>
            <item algoitem="NbrPrev PREND_LA_VALEUR NbrCurr" code="5#NbrPrev#NbrCurr#pasliste"/>
            <item algoitem="AFFICHER NbrCurr" code="3#NbrCurr#0#pasliste"/>
            <item algoitem="AFFICHER &quot; &quot;" code="4# #0"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
