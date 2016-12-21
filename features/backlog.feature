Feature: Managing Tasks
    In order to be more efficient, by splitting my tasks into smaller tasks
    As a Developer
    I want to manage my tasks in a backlog

    Scenario: Create a new task
        Given I have a empty Backlog with id "1"
        When I add a task with the title "my first task" to the backlog "1"
        Then The backlog with id "1" should have the following tasks:
            | title           | done    |
            | my first task   | false   |


