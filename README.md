# ChatGPT Utils

ChatGPT Utils is a library for writing your own plugins for ChatGPT. It provides helpers to kick-start your ChatGPT plugin. Can be used in user scripts or browser extensions.

## Usage

### ask(prompt)
Ask is a function that will call submitConversation() and getResult()
Use:
```javascript
await ask("Hello World!")
```
Return:
```
Hello! How can I assist you today?
```

### submitConversation(prompt)
SubmitConversation is a function that will write to the text input and press enter. Calls waitForReady() before writing.
Does not return output from prompt.

Use:
```javascript
await submitConversation(prompt)
```

### waitForReady()
WaitForReady is a function that will wait until ChatGPT has finished writing/outputting result.

Use:
```javascript
await waitForReady()
```

### getResult()
GetResult is a function that will get the last message and return it.

On first prompt it will not return valid data!

Use:
```javascript
await getResult()
```

Return:
```
Hello! How can I assist you today?
```