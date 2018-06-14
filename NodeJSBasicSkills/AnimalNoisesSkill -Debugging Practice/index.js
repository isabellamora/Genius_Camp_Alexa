{
    "interactionModel": {
        "languageModel": {
            "invocationName": "animal noises",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "CatIntent",
                    "slots": [],
                    "samples": [
                        "talk like a cat"
                    ]
                },
                {
                    "name": "DogIntent",
                    "slots": [],
                    "samples": [
                        "talk like a dog"
                    ]
                },
                {
                    "name": "LionIntent",
                    "slots": [],
                    "samples": [
                        "talk like a lion"
                    ]
                },
                {
                    "name": "AfterLionIntent",
                    "slots": [
                        {
                            "name": "myColor",
                            "type": "AMAZON.Color"
                        }
                    ],
                    "samples": [
                        "the color {myColor}",
                        "i like {myColor}",
                        "i like the color {myColor}",
                        "my favorite color is {myColor}"
                    ]
                }
            ],
            "types": []
        }
    }
}
