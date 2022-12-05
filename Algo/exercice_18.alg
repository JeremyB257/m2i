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
        <item algoitem="Salaire EST_DU_TYPE LISTE" code="1#LISTE#Salaire"/>
        <item algoitem="NbrSalaire EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrSalaire"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="Brut EST_DU_TYPE LISTE" code="1#LISTE#Brut"/>
        <item algoitem="Net EST_DU_TYPE LISTE" code="1#LISTE#Net"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE NbrSalaire" code="2#NbrSalaire#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A NbrSalaire -1" code="12#i#0#NbrSalaire -1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE Salaire[i]" code="2#Salaire#i"/>
            <item algoitem="Brut[i] PREND_LA_VALEUR Salaire[i] * 1.4" code="5#Brut#Salaire[i] * 1.4#i"/>
            <item algoitem="Net[i] PREND_LA_VALEUR Salaire[i] * 0.75" code="5#Net#Salaire[i] * 0.75#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Salaires avec charges patronnales : &quot;" code="4#Salaires avec charges patronnales : #1"/>
        <item algoitem="POUR i ALLANT_DE 0 A NbrSalaire -1" code="12#i#0#NbrSalaire -1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER Brut[i]" code="3#Brut#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Salaires net : &quot;" code="4#Salaires net : #1"/>
        <item algoitem="POUR i ALLANT_DE 0 A NbrSalaire -1" code="12#i#0#NbrSalaire -1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER Net[i]" code="3#Net#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
