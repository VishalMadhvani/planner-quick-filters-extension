const allTasksButton = document.createElement('button');
allTasksButton.textContent = 'All Tasks'
allTasksButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Bucket"]').click();
});

const myTasksButton = document.createElement('button');
myTasksButton.textContent = 'My Tasks'
myTasksButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    if (!document.querySelectorAll('.filterSection')[4].children[0].getAttribute('aria-expanded'))
        document.querySelectorAll('.filterSection')[4].click();
    const currentUser = document.getElementById('mectrl_currentAccount_primary').textContent;
    Array.from(document.querySelectorAll('.assignmentFilterRow')).find(button => button.innerHTML.includes(currentUser)).click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Due date"]').click();
});

const lateButton = document.createElement('button');
lateButton.textContent = 'Late'
lateButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    if (!document.querySelectorAll('.filterSection')[0].children[0].getAttribute('aria-expanded'))
        document.querySelectorAll('.filterSection')[0].click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('Late')).click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Assigned to"]').click();
});

const todayButton = document.createElement('button');
todayButton.textContent = 'Today'
todayButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    if (!document.querySelectorAll('.filterSection')[0].children[0].getAttribute('aria-expanded'))
        document.querySelectorAll('.filterSection')[0].click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('Today')).click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Assigned to"]').click();
});

const thisWeekButton = document.createElement('button');
thisWeekButton.textContent = 'This Week'
thisWeekButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    if (!document.querySelectorAll('.filterSection')[0].children[0].getAttribute('aria-expanded'))
        document.querySelectorAll('.filterSection')[0].click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('Late')).click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('This week')).click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Assigned to"]').click();
});

const nextWeekButton = document.createElement('button');
nextWeekButton.textContent = 'Next Week'
nextWeekButton.addEventListener('click', event => {
    document.querySelector('button.filters').click();
    document.querySelector('button.clearFilters').click();
    if (!document.querySelectorAll('.filterSection')[0].children[0].getAttribute('aria-expanded'))
        document.querySelectorAll('.filterSection')[0].click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('Late')).click();
    Array.from(document.querySelectorAll('.filterRow')).find(button => button.innerHTML.includes('Next week')).click();
    document.querySelector('button.filters').click();

    document.querySelector('button.rightMenu').click();
    document.querySelector('button[name="Assigned to"]').click();
});

const quickFilters = document.createElement('div');
quickFilters.classList.add('quick-filters');
quickFilters.append(allTasksButton);
quickFilters.append(myTasksButton);
quickFilters.append(lateButton);
quickFilters.append(todayButton);
quickFilters.append(thisWeekButton);
quickFilters.append(nextWeekButton);

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return

        for (var i = 0; i < mutation.addedNodes.length; i++) {
            var node = mutation.addedNodes[i]
            if (node.nodeType !== 1) continue;
            if (!node.classList.contains('topHeader')) continue;
            node.after(quickFilters);

            observer.disconnect();
            return;
        }
    })
})

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
})