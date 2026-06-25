(function() {
    // ----- Runtime Memory State Registries -----
    let arr = [12, 5, 8, 23, 1, 17];
    let list = [3, 17, 22, 9];
    let stack = [10, 20, 30];
    let queue = [5, 15, 25];

    // Node Hook Targets
    const arrayVisual = document.getElementById('array-visual');
    const listVisual = document.getElementById('list-visual');
    const stackVisual = document.getElementById('stack-visual');
    const queueVisual = document.getElementById('queue-visual');

    const arrayInfo = document.getElementById('array-info');
    const listInfo = document.getElementById('list-info');
    const stackInfo = document.getElementById('stack-info');
    const queueInfo = document.getElementById('queue-info');

    // ----- UI Core Redraw Interfaces -----
    function renderArray(highlightIndices = [], compareIndices = [], sortedIndices = [], animateIn = false) {
        if (arr.length === 0) {
            arrayVisual.innerHTML = `<span class="empty-message">Empty Array</span>`;
        } else {
            arrayVisual.innerHTML = arr.map((v, i) => {
                let cls = 'visual-item';
                if (sortedIndices.includes(i)) cls += ' sorted-3d';
                else if (highlightIndices.includes(i)) cls += ' highlight-3d';
                else if (compareIndices.includes(i)) cls += ' comparing-3d';
                if (animateIn) cls += ' slide-in-3d';
                return `<div class="${cls}" style="transition-delay: ${i * 30}ms">${v}</div>`;
            }).join('');
        }
        arrayInfo.textContent = `size: ${arr.length}`;
    }

    function renderList(animateIn = false) {
        if (list.length === 0) {
            listVisual.innerHTML = `<span class="empty-message">Empty Linked List</span>`;
        } else {
            listVisual.innerHTML = list.map((v, i) => {
                let cls = 'visual-item';
                if (animateIn) cls += ' slide-in-3d';
                let arrow = (i < list.length - 1) ? `<span style="font-size:1.5rem; color:rgba(0,180,255,0.4); font-weight:bold;">&rarr;</span>` : '';
                return `<div class="${cls}">${v}</div>${arrow}`;
            }).join('');
        }
        listInfo.textContent = `size: ${list.length}`;
    }

    function renderStack(animateIn = false, popOutIndex = -1) {
        if (stack.length === 0) {
            stackVisual.innerHTML = `<span class="empty-message">Empty Stack Frame</span>`;
        } else {
            stackVisual.innerHTML = stack.map((v, i) => {
                let cls = 'visual-item';
                if (i === stack.length - 1) cls += ' stack-top-3d';
                if (i === popOutIndex) cls += ' pop-out-3d';
                else if (animateIn && i === stack.length - 1) cls += ' slide-in-3d';
                return `<div class="${cls}">${v}</div>`;
            }).join('');
        }
        stackInfo.textContent = `size: ${stack.length}`;
    }

    function renderQueue(animateIn = false) {
        if (queue.length === 0) {
            queueVisual.innerHTML = `<span class="empty-message">Empty FIFO Queue</span>`;
        } else {
            queueVisual.innerHTML = queue.map((v, i) => {
                let cls = 'visual-item';
                if (i === 0) cls += ' highlight-3d';
                if (i === queue.length - 1 && queue.length > 1) cls += ' comparing-3d';
                if (animateIn) cls += ' slide-in-3d';
                return `<div class="${cls}">${v}</div>`;
            }).join('');
        }
        queueInfo.textContent = `size: ${queue.length}`;
    }

    function renderAll() {
        renderArray();
        renderList();
        renderStack();
        renderQueue();
    }

    const sleep = (ms = 150) => new Promise(res => setTimeout(res, ms));

    // ----- Async Algorithm Sorting Tracks -----
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
                    await sleep(150);
                    if (a[j] > a[j + 1]) {
                        [a[j], a[j + 1]] = [a[j + 1], a[j]];
                        arr = [...a];
                        renderArray([j, j + 1], [], []);
                        await sleep(150);
                    }
                }
            }
        } else if (algo === 'selection') {
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                for (let j = i + 1; j < n; j++) {
                    renderArray([minIdx], [j], []);
                    await sleep(150);
                    if (a[j] < a[minIdx]) minIdx = j;
                }
                if (minIdx !== i) {
                    [a[i], a[minIdx]] = [a[minIdx], a[i]];
                    arr = [...a];
                    renderArray([i, minIdx], [], []);
                    await sleep(150);
                }
            }
        } else if (algo === 'insertion') {
            for (let i = 1; i < n; i++) {
                let key = a[i], j = i - 1;
                renderArray([i], [], []);
                await sleep(150);
                while (j >= 0 && a[j] > key) {
                    renderArray([], [j, j + 1], []);
                    await sleep(150);
                    a[j + 1] = a[j];
                    j--;
                }
                a[j + 1] = key;
                arr = [...a];
                renderArray([j + 1], [], []);
                await sleep(150);
            }
        }

        renderArray([], [], Array.from({length: n}, (_, i) => i));
        sortBtn.disabled = false;
    }

    // ----- Router / Panel Tab Management -----
    const sortSelector = document.getElementById('sortSelector');

    function switchPanel(panelName) {
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.ds-tab').forEach(t => t.classList.remove('active'));

        const targetPanel = document.getElementById(`panel-${panelName}`);
        if (targetPanel) targetPanel.classList.add('active');

        const activeTab = document.querySelector(`.ds-tab[data-panel="${panelName}"]`);
        if (activeTab) activeTab.classList.add('active');

        sortSelector.style.display = (panelName === 'array') ? 'flex' : 'none';
    }

    document.querySelectorAll('.ds-tab, .home-card').forEach(tab => {
        tab.addEventListener('click', () => {
            switchPanel(tab.getAttribute('data-panel'));
        });
    });

    // ----- Primitive Lab Features Logic -----
    const primSelector = document.getElementById('primitive-selector');
    const primInput = document.getElementById('primitive-input');
    const primUpdateBtn = document.getElementById('primitive-update-btn');
    
    const regValOut = document.getElementById('reg-val-out');
    const regSizeOut = document.getElementById('reg-size-out');
    const regBinOut = document.getElementById('reg-bin-out');

    primSelector.addEventListener('change', () => {
        const val = primSelector.value;
        if (val === 'int') primInput.value = '42';
        else if (val === 'float') primInput.value = '3.14';
        else if (val === 'char') primInput.value = 'A';
        else if (val === 'bool') primInput.value = 'true';
    });

    function updatePrimitiveLab() {
        const type = primSelector.value;
        let rawInput = primInput.value.trim();
        
        let displayVal = rawInput;
        let sizeText = "";
        let binaryText = "";

        if (type === 'int') {
            let parsed = parseInt(rawInput) || 0;
            displayVal = parsed;
            sizeText = "4 Bytes (32-bit signed)";
            let cleanBin = (parsed >>> 0).toString(2).padStart(32, '0');
            binaryText = cleanBin.match(/.{1,8}/g).join(' ');
        } 
        else if (type === 'float') {
            let parsed = parseFloat(rawInput) || 0.0;
            displayVal = parsed;
            sizeText = "4 Bytes (32-bit IEEE 754 Float Sign)";
            
            let buffer = new ArrayBuffer(4);
            let view = new DataView(buffer);
            view.setFloat32(0, parsed, false);
            let chunks = [];
            for(let i=0; i<4; i++) {
                chunks.push(view.getUint8(i).toString(2).padStart(8, '0'));
            }
            binaryText = chunks.join(' ');
        } 
        else if (type === 'char') {
            if(rawInput.length === 0) rawInput = ' ';
            let charCode = rawInput.charCodeAt(0);
            displayVal = `'${rawInput[0]}' (ASCII: ${charCode})`;
            sizeText = "1 Byte (8-bit ASCII Encoding Format)";
            binaryText = charCode.toString(2).padStart(8, '0');
        } 
        else if (type === 'bool') {
            let parsed = (rawInput.toLowerCase() === 'true' || rawInput === '1');
            displayVal = parsed ? "true" : "false";
            sizeText = "1 Byte (Addressable Boolean State Block)";
            binaryText = parsed ? "00000001" : "00000000";
        }

        regValOut.textContent = displayVal;
        regSizeOut.textContent = sizeText;
        regBinOut.textContent = binaryText;

        document.querySelectorAll('.register-box').forEach(box => {
            box.style.borderColor = '#00b4ff';
            setTimeout(() => box.style.borderColor = '', 300);
        });
    }

    primUpdateBtn.addEventListener('click', updatePrimitiveLab);

    // ----- Event Hooks & Actions -----
    // Array
    document.getElementById('arr-push').addEventListener('click', () => {
        arr.push(parseInt(document.getElementById('array-input').value) || 0);
        renderArray([], [], [], true);
    });
    document.getElementById('arr-unshift').addEventListener('click', () => {
        arr.unshift(parseInt(document.getElementById('array-input').value) || 0);
        renderArray([], [], [], true);
    });
    document.getElementById('arr-pop').addEventListener('click', () => { arr.pop(); renderArray(); });
    document.getElementById('arr-shift').addEventListener('click', () => { arr.shift(); renderArray(); });
    document.getElementById('arr-reset').addEventListener('click', () => { arr = [12, 5, 8, 23, 1, 17]; renderArray(); });

    // Linked List
    document.getElementById('list-addhead').addEventListener('click', () => {
        list.unshift(parseInt(document.getElementById('list-input').value) || 0);
        renderList(true);
    });
    document.getElementById('list-addtail').addEventListener('click', () => {
        list.push(parseInt(document.getElementById('list-input').value) || 0);
        renderList(true);
    });
    document.getElementById('list-removehead').addEventListener('click', () => { list.shift(); renderList(); });
    document.getElementById('list-removetail').addEventListener('click', () => { list.pop(); renderList(); });
    document.getElementById('list-reset').addEventListener('click', () => { list = [3, 17, 22, 9]; renderList(); });

    // Stack
    document.getElementById('stack-push').addEventListener('click', () => {
        stack.push(parseInt(document.getElementById('stack-input').value) || 0);
        renderStack(true);
    });
    document.getElementById('stack-pop').addEventListener('click', async () => {
        if (stack.length === 0) return;
        renderStack(false, stack.length - 1);
        await sleep(300);
        stack.pop();
        renderStack();
    });
    document.getElementById('stack-peek').addEventListener('click', async () => {
        let top = stackVisual.querySelector('.stack-top-3d');
        if (!top) return;
        top.style.background = 'rgba(0, 210, 255, 0.6)';
        await sleep(400);
        top.style.background = '';
    });
    document.getElementById('stack-reset').addEventListener('click', () => { stack = [10, 20, 30]; renderStack(); });

    // Queue
    document.getElementById('queue-enqueue').addEventListener('click', () => {
        queue.push(parseInt(document.getElementById('queue-input').value) || 0);
        renderQueue(true);
    });
    document.getElementById('queue-dequeue').addEventListener('click', () => { queue.shift(); renderQueue(); });
    document.getElementById('queue-front').addEventListener('click', async () => {
        let node = queueVisual.querySelector('.visual-item');
        if (!node) return;
        node.style.background = 'rgba(0, 210, 255, 0.6)';
        await sleep(400);
        node.style.background = '';
    });
    document.getElementById('queue-rear').addEventListener('click', async () => {
        let nodes = queueVisual.querySelectorAll('.visual-item');
        if (nodes.length === 0) return;
        let node = nodes[nodes.length - 1];
        node.style.background = 'rgba(255, 107, 53, 0.6)';
        await sleep(400);
        node.style.background = '';
    });
    document.getElementById('queue-reset').addEventListener('click', () => { queue = [5, 15, 25]; renderQueue(); });

    // Global Initializers
    document.getElementById('sortBtn').addEventListener('click', sortArray);
    document.getElementById('shuffleBtn').addEventListener('click', () => {
        arr.sort(() => Math.random() - 0.5);
        renderArray();
    });

    switchPanel('home');
    renderAll();
})();
