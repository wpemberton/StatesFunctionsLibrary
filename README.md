# StatesFunctionsLibrary
the function getColumn() returns a single column from a csv file as an array. the csv must be hosted online and accessible. 
#
##### returns a column from the csv file at the given url as a list
###### @param url {string} - the url to the raw csv contents
###### @param column number {number} - the column you'd like as a list (the first column is 0)
###### @return column {list} - the list containing the specified column contents
**`function getColumn(url, column)`**
#
The function getPovertyRate(state) takes a state as a parameter and returns the percentage of poverty in that state.
###### state{string} - the desired state
###### return {number} - the matching number of rates of poverty in that state
**`function getPovertyRate(state)`**
#
the function getArea(state) takes a state as a parameter and returns the area of that state.
###### state{string} - the desired state
###### return {Number} - the matching number of area or -1 as an error message because that state doesn't exist
**`function getArea(state)`**
#
the function getCapital(state) takes a state as a parameter and returns the capital of that state.
###### state{string} - the desired state
###### return {String} - the matching name of capital
**`function getCapital(state)`**
#
the function getStateFlag(state) takes a state as a parameter and returns the flag of that state. 
###### state{string} - the desired state
###### return {String} - the matching link to the states flag
**`function getStateFlag(state)`**
#
the function getNickName(state) takes a state as a parameter adn returns the nickname of that state
###### state{string} - the desired state
###### return {String} - the matching nickname
**`function getNickName(state)`**
#
