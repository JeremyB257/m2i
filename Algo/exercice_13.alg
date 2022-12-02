<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Nbr" algoitem="Nbr EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NbrDiv" algoitem="NbrDiv EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#Nbr#pasliste" algoitem="LIRE Nbr"/>
        <item code="15#Nbr != floor(Nbr)" algoitem="TANT_QUE (Nbr != floor(Nbr)) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Nombre entier :#1" algoitem="AFFICHER &quot;Nombre entier :&quot;"/>
            <item code="2#Nbr#pasliste" algoitem="LIRE Nbr"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#NbrDiv#floor(Nbr/2)#pasliste" algoitem="NbrDiv PREND_LA_VALEUR floor(Nbr/2)"/>
        <item code="6#NbrDiv*2 == Nbr" algoitem="SI (NbrDiv*2 == Nbr) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Nombre Paire#0" algoitem="AFFICHER &quot;Nombre Paire&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Nombre Impaire#0" algoitem="AFFICHER &quot;Nombre Impaire&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
