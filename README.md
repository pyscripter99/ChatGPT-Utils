![ChatGPT Utils](https://github.com/pyscripter99/ChatGPT-Utils/assets/78647110/6baeb5be-03e9-49ba-afa8-07416ad9d2f2)
# ChatGPT Utils

ChatGPT Utils is a library for writing your own plugins for ChatGPT. It provides helpers to kick-start your ChatGPT plugin. This is a standalone file so it can be used in user scripts or browser extensions.

## Usage

### ask(prompt)

Ask is a function that will call submitConversation() and getResult()
Use:
```javascript
await ask("Hello World!");
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
await submitConversation(prompt);
```

### waitForReady()

WaitForReady is a function that will wait until ChatGPT has finished writing/outputting result.

Use:
```javascript
await waitForReady();
```

### getResult()

GetResult is a function that will get the last message and return it. Calls waitForReady() before reading.

Use:
```javascript
await getResult();
```

Return:
```
Hello! How can I assist you today?
```

### onReady(callback)

OnReady is a function that will execute the callback when ChatGPT has finished writing/outputting.

Use:
```javascript
onReady(() => {
    console.log("ChatGPT is ready!")
});

// Or

function handleReady() {
    console.log("ChatGPT is ready!");
}

onReady(handleReady);
```

### onSubmit(callback)

OnSubmit is a function that will execute the callback when the user prompts chatgpt.

```javascript
onSubmit((prompt) => {
    console.log("User prompted: " + prompt)
});

// Or

function handleSubmit(prompt) {
    console.log("User prompted: " + prompt);
}

onSubmit(handleSubmit);
```

### onResult(callback)

OnResult is a function that will execute the callback when ChatGPT has finished writing a response.

Use:
```javascript
onResult((result) => {
    console.log("ChatGPT replied: " + result)
});

// Or

function handleResult(result) {
    console.log("ChatGPT replied: " + result);
}

onResult(handleResult);
```
