<!-- JavaScript for copying code and opening links -->
        function copyToClipboard(id) {
            const code = document.getElementById(id).textContent;
            navigator.clipboard.writeText(code).then(() => {
                alert("Code copied to clipboard!");
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        }
		
		function openLink0() {
            // প্রথম বাটনের লিঙ্ক
            window.open("https://github.com/SudoR2spr/example/blob/master/encoded.py", "_blank");
        }
		
		function openLink1() {
            // দ্বিতীয় বাটনের লিঙ্ক
            window.open("https://github.com/SudoR2spr/example/blob/master/setup.py", "_blank");
        }

        function openLink2() {
            // প্রথম বাটনের লিঙ্ক
            window.open("https://github.com/SudoR2spr/main-py-repo/blob/master/main.py", "_blank");
        }

        function openLink3() {
            // দ্বিতীয় বাটনের লিঙ্ক
            window.open("https://github.com/SudoR2spr/main-py-repo/blob/master/requirements.txt", "_blank");
        }

        function openLink4() {
            // তৃতীয় বাটনের লিঙ্ক
            window.open("https://github.com/SudoR2spr/main-py-repo/blob/master/Dockerfile", "_blank");
        }
		
		function openLink5() {
            // তৃতীয় বাটনের লিঙ্ক
            window.open("https://t.me/Opleech_WD", "_blank");
        }
		
		function openLink6() {
            // তৃতীয় বাটনের লিঙ্ক
            window.open("https://t.me/+XfmrBSzTyRFlZTI9", "_blank");
        }
    <!-- JavaScript woodcraft -->