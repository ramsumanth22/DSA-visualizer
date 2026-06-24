(function() {
    // ----- state -----
    let arr = [12, 5, 8, 23, 1, 17];
    let list = [3, 17, 22, 9];
    let stack = [10, 20, 30];
    let queue = [5, 15, 25];

    // DOM refs
    const arrayVisual = document.getElementById('array-visual');
    const listVisual = document.getElementById('list-visual');
    const stackVisual = document.getElementById('stack-visual');
    const queueVisual = document.getElementById('queue-visual');

    const arrayInfo = document.getElementById('array-info');
    const listInfo = document.getElementById('list-info');
    const stackInfo = document.getElementById('stack-info');
    const queueInfo = document.getElementById('queue-info');

    // ----- render helpers with 3D animations -----
    function renderArray(highlightIndices = [], compareIndices = [], sortedIndices = [], animateIn = false) {
        if (arr.length === 0) {
            arrayVisual.innerHTML = `<span class="empty-message">empty</span>`;
        } else {
            let html = arr.map((v, i) => {
                let cls = 'visual-item';
                if (sortedIndices.includes(i)) cls += ' sorted-3d';
                else if (highlightIndices.includes(i)) cls += ' highlight-3d';
                else if (compareIndices.includes(i)) cls += ' comparing-3d';
                if (animateIn) cls += ' slide-in-3d';
                return `<div class="${cls}" style="transition-delay: ${i * 40}ms">${v}</div>`;
            }).join('');
            arrayVisual.innerHTML = html;
        }
        arrayInfo.textContent = `size: ${arr.length}`;
    }

    function renderList(animateIn = false) {
        if (list.length === 0) {
            listVisual.innerHTML = `<span class="empty-message">empty list</span>`;
        } else {
            let html = list.map((v, i) => {
                let cls = 'visual-item';
                if (animateIn) cls += ' slide-in-3d';
                let arrow = (i < list.length-1) ? `<span style="font-size:1.8rem; opacity:0.3; margin:0 2px; color:rgba(255,255,255,0.3);">→</span>` : '';
                return `<div class="${cls}" style="transition-delay: ${i * 40}ms">${v}</div>${arrow}`;
            }).join('');
            listVisual.innerHTML = html;
        }
        listInfo.textContent = `size: ${list.length}`;
    }

    // --- STACK RENDER (3D container) ---
    function renderStack(animateIn = false, popOutIndex = -1) {
        if (stack.length === 0) {
            stackVisual.innerHTML = `<span class="empty-message">empty stack</span>`;
        } else {
            let html = stack.map((v, i) => {
                let cls = 'visual-item';
                if (i === stack.length-1) cls += ' stack-top-3d';
                if (i === popOutIndex) cls += ' pop-out-3d';
                else if (animateIn && i === stack.length-1) cls += ' slide-in-3d';
                return `<div class="${cls}" style="transition-delay: ${(stack.length - 1 - i) * 50}ms">${v}</div>`;
            }).join('');
            stackVisual.innerHTML = html;
        }
        stackInfo.textContent = `size: ${stack.length}`;
    }

    function renderQueue(animateIn = false) {
        if (queue.length === 0) {
            queueVisual.innerHTML = `<span class="empty-message">empty queue</span>`;
        } else {
            let html = queue.map((v, i) => {
                let cls = 'visual-item';
                if (i === 0) cls += ' highlight-3d';
                if (i === queue.length-1) cls += ' comparing-3d';
                if (animateIn) cls += ' slide-in-3d';
                return `<div class="${cls}" style="transition-delay: ${i * 40}ms">${v}</div>`;
            }).join('');
            queueVisual.innerHTML = html;
        }
        queueInfo.textContent = `size: ${queue.length}`;
    }

    function renderAll(animateIn = false) {
        renderArray([], [], [], animateIn);
        renderList(animateIn);
        renderStack(animateIn);
        renderQueue(animateIn);
    }

    // ----- SORTING (async with 3D visuals) -----
    async function sleep(ms = 160) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sortArray() {
        const algo = document.getElementById('sortAlgorithm').value;
        const n = arr.length;
        if (n <= 1) return;

        let a = [...arr];
        let sortBtn = document.getElementById('sortBtn');
        sortBtn.disabled = true;

        if (algo === 'bubble') {
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    renderArray([], [j, j + 1], []);
                    await sleep(140);
                    if (a[j] > a[j + 1]) {
                        [a[j], a[j + 1]] = [a[j + 1], a[j]];
                        arr = [...a];
                        renderArray([j, j + 1], [], []);
                        await sleep(140);
                    }
                }
            }
        } else if (algo === 'selection') {
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                for (let j = i + 1; j < n; j++) {
                    renderArray([minIdx], [j], []);
                    await sleep(140);
                    if (a[j] < a[minIdx]) {
                        minIdx = j;
                    }
                }
                if (minIdx !== i) {
                    [a[i], a[minIdx]] = [a[minIdx], a[i]];
                    arr = [...a];
                    renderArray([i, minIdx], [], []);
                    await sleep(140);
                }
            }
        } else if (algo === 'insertion') {
            for (let i = 1; i < n; i++) {
                let key = a[i];
                let j = i - 1;
                renderArray([i], [], []);
                await sleep(140);
                while (j >= 0 && a[j] > key) {
                    renderArray([], [j, j + 1], []);
                    await sleep(140);
                    a[j + 1] = a[j];
                    j--;
                }
                a[j + 1] = key;
                arr = [...a];
                renderArray([j + 1], [], []);
                await sleep(140);
            }
        }

        let fineSorted = Array.from({length: n}, (_, i) => i);
        renderArray([], [], fineSorted);
        sortBtn.disabled = false;
    }

    // ----- Panel Navigation -----
    const tabs = document.querySelectorAll('.ds-tab, .home-card');
    const panels = document.querySelectorAll('.panel');
    const sortSelector = document.getElementById('sortSelector');

    function switchPanel(panelName) {
        panels.forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.ds-tab').forEach(t => t.classList.remove('active'));

        const targetPanel = document.getElementById(`panel-${panelName}`);
        if (targetPanel) targetPanel.classList.add('active');

        const activeTab = document.querySelector(`.ds-tab[data-panel="${panelName}"]`);
        if (activeTab) activeTab.classList.add('active');

        if (panelName === 'array') {
            sortSelector.style.display = 'flex';
        } else {
            sortSelector.style.display = 'none';
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const panelName = tab.getAttribute('data-panel');
            switchPanel(panelName);
        });
    });

    // ----- Data Operations Handler Loops -----
    // Arrays
    document.getElementById('arr-push').addEventListener('click', () => {
        const val = parseInt(document.getElementById('array-input').value) || 0;
        arr.push(val);
        renderArray([], [], [], true);
    });
    document.getElementById('arr-unshift').addEventListener('click', () => {
        const val = parseInt(document.getElementById('array-input').value) || 0;
        arr.unshift(val);
        renderArray([], [], [], true);
    });
    document.getElementById('arr-pop').addEventListener('click', () => {
        arr.pop();
        renderArray();
    });
    document.getElementById('arr-shift').addEventListener('click', () => {
        arr.shift();
        renderArray();
    });
    document.getElementById('arr-reset').addEventListener('click', () => {
        arr = [12, 5, 8, 23, 1, 17];
        renderArray();
    });

    // Linked Lists
    document.getElementById('list-addhead').addEventListener('click', () => {
        const val = parseInt(document.getElementById('list-input').value) || 0;
        list.unshift(val);
        renderList(true);
    });
    document.getElementById('list-addtail').addEventListener('click', () => {
        const val = parseInt(document.getElementById('list-input').value) || 0;
        list.push(val);
        renderList(true);
    });
    document.getElementById('list-removehead').addEventListener('click', () => {
        list.shift();
        renderList();
    });
    document.getElementById('list-removetail').addEventListener('click', () => {
        list.pop();
        renderList();
    });
    document.getElementById('list-reset').addEventListener('click', () => {
        list = [3, 17, 22, 9];
        renderList();
    });

    // Stacks
    document.getElementById('stack-push').addEventListener('click', () => {
        const val = parseInt(document.getElementById('stack-input').value) || 0;
        stack.push(val);
        renderStack(true);
    });
    document.getElementById('stack-pop').addEventListener('click', async () => {
        if (stack.length === 0) return;
        renderStack(false, stack.length - 1);
        await sleep(350);
        stack.pop();
        renderStack();
    });
    document.getElementById('stack-peek').addEventListener('click', async () => {
        if (stack.length === 0) return;
        let topItem = stackVisual.querySelector('.stack-top-3d');
        if (topItem) {
            topItem.style.background = 'rgba(0, 210, 255, 0.6)';
            await sleep(500);
            topItem.style.background = '';
        }
    });
    document.getElementById('stack-reset').addEventListener('click', () => {
        stack = [10, 20, 30];
        renderStack();
    });

    // Queues
    document.getElementById('queue-enqueue').addEventListener('click', () => {
        const val = parseInt(document.getElementById('queue-input').value) || 0;
        queue.push(val);
        renderQueue(true);
    });
    document.getElementById('queue-dequeue').addEventListener('click', () => {
        queue.shift();
        renderQueue();
    });
    document.getElementById('queue-front').addEventListener('click', async () => {
        if (queue.length === 0) return;
        let items = queueVisual.querySelectorAll('.visual-item');
        if (items[0]) {
            items[0].classList.add('sorted-3d');
            await sleep(600);
            items[0].classList.remove('sorted-3d');
        }
    });
    document.getElementById('queue-rear').addEventListener('click', async () => {
        if (queue.length === 0) return;
        let items = queueVisual.querySelectorAll('.visual-item');
        let last = items[items.length - 1];
        if (last) {
            last.classList.add('sorted-3d');
            await sleep(600);
            last.classList.remove('sorted-3d');
        }
    });
    document.getElementById('queue-reset').addEventListener('click', () => {
        queue = [5, 15, 25];
        renderQueue();
    });

    // Sort/Shuffle triggers
    document.getElementById('sortBtn').addEventListener('click', sortArray);
    document.getElementById('shuffleBtn').addEventListener('click', () => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        renderArray();
    });

    // Initial load boot context execution
    switchPanel('home');
    renderAll();
})();