The first thing I’d say is that it’s tolerable as it is—a program so short doesn’t require any deep structure to be comprehensible. But remember my earlier point that I have to keep examples small. Imagine this program on a larger scale—perhaps hundreds of lines long.
At that size, a single inline function is hard to understand.

Making a copy may not seem too onerous a task, but it sets up all sorts of problems for the future. Any changes to the charging logic would force me to update both methods—and to ensure they are updated consistently.

If I’m writing a program that will never change again, this kind of copy-and-paste is fine. But if it’s a long-lived program, then duplication is a menace.
This brings me to a second change. **The players are looking to perform more kinds of plays: they hope to add history, pastoral, pastoral-comical, historical-pastoral, tragical-historical, tragical-comical-historical-pastoral, scene individable, and poem unlimited to their repertoire. They haven’t exactly decided yet what they want to do and when. This change will affect both the way their plays are charged for and the way volume credits are calculated.**

As an experienced developer I can be sure that whatever scheme they come up with, they will change it again within six months. After all, when feature requests come, they come not as single spies but in battalions.

A poorly designed system is hard to change, because it is difficult to figure out what to change and how these changes will interact with the existing code to get the behavior I want. And if it is hard to figure out what to change, there is a good chance that I will make mistakes and introduce bugs.

> When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the program to make it easy to add the feature, then add the feature.

the first step in refactoring is to write self-checking tests.
Whenever I do refactoring, the first step is always the same. I need to ensure I
have a solid set of tests for that section of code. The tests are essential because
even though I will follow refactorings structured to avoid most of the opportunities
for introducing bugs, I’m still human and still make mistakes. The larger a program, the more likely it is that my changes will cause something to break
inadvertently—in the digital age, frailty’s name is software.

> Before you start refactoring, make sure you have a solid suite of tests. These tests must be self-checking.

refactor, compile, test, and commit.
refactor, compile, test, and commit.
refactor, compile, test, and commit.

> Refactoring changes the programs in small steps, so if you make a mistake, it is easy to find where the bug is.

Once I’ve made this change, I immediately compile and test to see if I’ve broken
anything. It’s an important habit to test after every refactoring, however simple.
Mistakes are easy to make—at least, I find them easy to make.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

> When programming, follow the camping rule: Always leave the code base healthier than when you found it.

