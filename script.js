body {
    background: radial-gradient(circle, #1a1a1a 0%, #000 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    overflow: hidden;
    font-family: 'Crimson Text', serif;
}

.book {
    display: flex;
    width: 90vw;
    max-width: 800px;
    height: 500px;
    background: #fdfaf0;
    /* MARCO CAFÉ ESTILO ANTIGUO */
    border: 10px solid #5d4037;
    border-style: outset;
    border-radius: 5px;
    box-shadow: 0 0 50px rgba(184, 134, 11, 0.3);
}

.page {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.left-page {
    border-right: 2px solid rgba(0,0,0,0.1);
    background: linear-gradient(to right, #f2ead3, #fdfaf0);
}

.burton-quote p {
    font-size: 1.1rem;
    font-style: italic;
    margin: 5px 0;
    color: #333;
}

.movie {
    font-weight: bold;
    font-size: 0.8rem;
    margin-top: 10px;
}

/* ESTILO DEL CONTADOR */
.timer-container {
    margin-top: 25px;
    padding: 10px;
    border-top: 1px double #5d4037;
}

.timer-label {
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #5d4037;
    margin-bottom: 5px;
}

.timer-numbers {
    font-family: 'Pirata One', cursive;
    font-size: 1.6rem;
    color: #000;
}

.tree-container img {
    width: 150px;
    margin-bottom: 10px;
}

.question {
    font-family: 'Pirata One', cursive;
    font-size: 2rem;
    color: #000;
}

.buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 80px;
    position: relative;
}

.btn {
    padding: 10px 25px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 20px;
    border: 2px solid #000;
    cursor: pointer;
    z-index: 10;
}

.btn.yes { background: #000; color: #fff; }
.btn.no { background: transparent; color: #000; }

@media (max-width: 600px) {
    .book { flex-direction: column; height: auto; width: 95vw; }
    .left-page { border-right: none; border-bottom: 1px solid #ccc; }
}
