export default {
    main: {
        title: 'Düünbox',
        underTitle: 'Not Jack\'s, but Düün\'s.',
    },
    game: {
        create: {
            name: { label: 'Name' },
            code: { label: 'Code' },
            createButton: 'New Game',
            joinButton: 'Join Game',
            error: {
                nameTaken: 'This name is already in use.',
                gameNotFound: 'No game could be found with this code.',
            },
        },
        lobby: {
            code: { label: 'Code' },
            game: {
                label: 'Game',
                value: {
                    bussen: 'Bussen',
                },
            },
            players: { label: 'Players' },
            startButton: 'Start',
            error: {
                couldNotStart: 'Game could not be started.',
                invalidGame: 'This game is not available.',
            },
            changeName: {
                title: 'Change Name',
                name: { label: 'New Name' },
                changeButton: 'Change',
            },
        },
        form: {
            submitButton: 'Submit',
        },
        message: {
            nameChange: '{{oldName}} changed their name to {{newName}}.',
            playerJoined: '{{name}} has joined the game.',
        },
        bussen: {
            color: {
                label: 'Red or black?',
                value: {
                    red: 'Red',
                    black: 'Black',
                },
            },
            higherLower: {
                label: 'Higher or lower?',
                value: {
                    higher: 'Higher',
                    equal: 'Equal',
                    lower: 'Lower',
                },
            },
            insideOutside: {
                label: 'Inside or outside?',
                value: {
                    inside: 'Inside',
                    equal: 'Equal',
                    outside: 'Outside',
                },
            },
            suit: {
                label: 'Suit?',
                value: {
                    spades: 'Spades',
                    diamonds: 'Diamonds',
                    clubs: 'Clubs',
                    hearts: 'Hearts',
                    discos: 'Disco',
                },
            },
            message: {
                playerAnswer: '{{player}} says {{answer!trans!lower}}.',
                actualAnswer: 'It is {{answer!trans!lower}}!',
                drink: '{{players}}, drink!',
                drink_plural: '{{players}}, drink {{count}} times!',
            },
        },
    },
    error: {
        unknown: 'An unexpected error occured.',
    },
};
