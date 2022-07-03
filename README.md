# TxPipe RFCs
The "RFC" (request for comments) process is intended to provide an open, organized location to discuss changes to TxPipe tools an libraries. The end goal is to provide all stakeholders with a mechanism for participation and visibility on the direction of the project.

Small changes, including bug fixes, documentation, small refactorings, etc, can be implemented and reviewed via the normal GitHub pull request workflow, without the need for a RFC.

Some changes though are "substantial", and we ask that these be presented through a PR to this repository, which should include a markdown document describing the proposal. The idea will be open to discussion by any interested member of the community. Acceptance of the proposal will require a final approval of the code owners.

## Procedure
Everyone is welcome to submit RFCs and participate in existing ones. To submit a new RFC:

1. Fork the RFC repo [RFC repository](https://github.com/txpipe/rfcs)
2. Copy `0000-template.md` to `text/0000-my-title.md` (where "my-title" is descriptive). Don't assign an RFC number yet; This is going to be the PR number.
3. Write the document and fill in the blanks.
4. Submit a pull request. Use the issue number of the PR to update your `0000-` prefix to that number.
5. Discussion takes place, and the text is revised in response.
6. The PR is merged or closed when all of the members reach consensus.
7. Any contributor can start working on the implementation of the proposal (RFC authors aren't necesarly responsible for the implementation).