# :hospital: Hospitals-Residents-Problem

This is a toy implementation in NodeJs of _**The Hospitals / Residents Problem (1962; Gale, Shapley)**_. The reference used can be found here [http://eprints.gla.ac.uk/115765/1/115765.pdf](http://eprints.gla.ac.uk/115765/1/115765.pdf). 
This project is not meant to be necessarily useful but could serve for inspiration. Please, beware that
the code is purposefully not robust in order to keep things simple. Therefore, make sure to give sound inputs.

## :oncoming_automobile: Getting Started

Follow the instructions below to experiment with the algorithm.

### :mortar_board: Prerequisites

You need to have docker installed on your system. 

### :rocket: Run

Simply run this command:
```
docker run --rm -it -v $PWD:/code --workdir /code node:18.1-alpine npm run hr
```

Note that you can change [example.json](example.json) file for different inputs.

### :hammer: Tests

This command will run the unit test(s):
```
docker run --rm -it -v $PWD:/code --workdir /code node:18.1-alpine npm run test
```

## :page_with_curl: License

This project is licensed under the GNU GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details