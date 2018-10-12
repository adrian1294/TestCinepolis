@watch
Feature: Test
    Scenario: Cinepolis
        Given we're in Cinepolis
        #When we close the announcement ".takeover-close"
        When we click "#cmbCiudades"
        Then we set the city "San Pedro"
        And we set the place "Cinépolis San Pedro"
        # Given we're in Cinepolis Cartelera San Pedro
        # When we set an set a range of hour between "" and ""