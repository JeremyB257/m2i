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
        <item algoitem="PAGES EST_DU_TYPE NOMBRE" code="1#NOMBRE#PAGES"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE PAGES" code="2#PAGES#pasliste"/>
        <item algoitem="SI (PAGES &lt;= 10) ALORS" code="6#PAGES &lt;= 10">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Vous allez payer &quot;" code="4#Vous allez payer #0"/>
            <item algoitem="AFFICHERCALCUL 0.2 * PAGES" code="20#0.2 * PAGES#0"/>
            <item algoitem="AFFICHER &quot;€&quot;" code="4#€#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (PAGES &lt;= 30 ET PAGES > 10) ALORS" code="6#PAGES &lt;= 30 ET PAGES > 10">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Vous allez payer &quot;" code="4#Vous allez payer #0"/>
                    <item algoitem="AFFICHERCALCUL 2 + 0.15*(PAGES-10)" code="20#2 + 0.15*(PAGES-10)#0"/>
                    <item algoitem="AFFICHER &quot;€&quot;" code="4#€#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="AFFICHER &quot;Vous allez payer &quot;" code="4#Vous allez payer #0"/>
                        <item algoitem="AFFICHERCALCUL 2 + 3 + 0.1*(PAGES-30)" code="20#2 + 3 + 0.1*(PAGES-30)#0"/>
                        <item algoitem="AFFICHER &quot;€&quot;" code="4#€#0"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
