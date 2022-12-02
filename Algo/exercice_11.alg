<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Nbr EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbr"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="NbrPrev EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrPrev"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 0 A 20" code="12#i#0#20">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE Nbr" code="2#Nbr#pasliste"/>
            <item algoitem="AFFICHER Nbr" code="3#Nbr#0#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
