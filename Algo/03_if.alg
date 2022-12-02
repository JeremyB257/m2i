<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SINON" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="DOSE EST_DU_TYPE NOMBRE" code="1#NOMBRE#DOSE"/>
        <item algoitem="COVID EST_DU_TYPE NOMBRE" code="1#NOMBRE#COVID"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Combien avez vous eu de dose ?&quot;" code="4#Combien avez vous eu de dose ?#0"/>
        <item algoitem="LIRE DOSE" code="2#DOSE#pasliste"/>
        <item algoitem="AFFICHER &quot;Avez vous eu le Covid ?[0]: non, [1]: Oui&quot;" code="4#Avez vous eu le Covid ?[0]: non, [1]: Oui#0"/>
        <item algoitem="LIRE COVID" code="2#COVID#pasliste"/>
        <item algoitem="SI (DOSE >= 3 OU COVID == 1) ALORS" code="6#DOSE >= 3 OU COVID == 1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Let's go to restaurant&quot;" code="4#Let's go to restaurant#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;let's go to vaccin&quot;" code="4#let's go to vaccin#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
