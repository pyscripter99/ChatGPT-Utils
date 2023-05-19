// Define the submitConversation function
// Wait for chatgpt to be ready, then submit question
async function submitConversation(text) {
    await waitForReady();
    const textarea = document.querySelector("textarea[tabindex='0']");
    const enterKeyEvent = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        keyCode: 13,
    });
    textarea.value = text;
    textarea.dispatchEvent(enterKeyEvent);
}

async function waitForReady() {
    let chatgptReady = false;
    while (!chatgptReady) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        chatgptReady = !document.querySelector(
            ".text-2xl > span:not(.invisible)"
        );
    }
}

async function getResult() {
    await waitForReady();
    var children = document.querySelectorAll(
        "#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.flex-1.overflow-hidden > div > div > div > div"
    );
    var resp = children[children.length - 2].querySelector(
        "div > div:nth-child(2) > div > div"
    );
    if (children.length === 3) {
        return resp.parentElement.querySelector("div:nth-child(2) > div")
            .textContent;
    }
    return resp.textContent;
}

async function ask(prompt) {
    await submitConversation(prompt);
    var res;
    await getResult().then((result) => {
        res = result;
    });
    return res;
}

function onSubmit(callback) {
    document.addEventListener("keyup", handleKeyPress);
    var value = "";

    function handleKeyPress(event) {
        const textarea = event.target;
        if (
            textarea.tagName === "TEXTAREA" &&
            textarea.matches("[tabindex='0']")
        ) {
            if (event.keyCode === 13 && textarea.value === "") {
                callback(value);
            } else {
                value = textarea.value;
            }
        }
    }
}

function onResult(callback) {
    return new Promise((resolve) => {
        const processNextResult = async () => {
            const message = await new Promise((innerResolve) => {
                onSubmit(innerResolve);
            });

            const result = await getResult();
            callback(result); // Call the provided callback with the result
            resolve(result);

            // Process the next result
            processNextResult();
        };

        processNextResult();
    });
}

function onReady(callback) {
    const checkReadyState = () => {
        const isReady = !document.querySelector(
            ".text-2xl > span:not(.invisible)"
        );
        if (isReady) {
            callback();
        } else {
            setTimeout(checkReadyState, 500);
        }
    };

    checkReadyState();
}

// // Periodically check if the button has been added to the page and add it if it hasn't
// const targetSelector =
//     ".flex.flex-col.w-full.py-2.flex-grow.md\\:py-3.md\\:pl-4";
// const intervalId = setInterval(() => {
//     const targetElement = document.querySelector(targetSelector);
//     if (targetElement && !targetElement.contains(button)) {
//         // Insert the button before the target element
//         targetElement.parentNode.insertBefore(button, targetElement);

//         // Insert the progress bar container before the target element
//         targetElement.parentNode.insertBefore(progressContainer, targetElement);

//         // Insert the chunk size label and input before the target element
//         targetElement.parentNode.insertBefore(chunkSizeLabel, targetElement);
//     }
// }, 5000);
