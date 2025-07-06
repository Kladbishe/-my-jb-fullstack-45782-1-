function BoxStar(width, height) {
    for (let z = 1; z <= height; z++) {
        if (z === 1 || z === height) {
            for (let i = 1; i <= width; i++) {
                document.write("* ");
            }
        } else {
            document.write("*");
            for (let j = 1; j <= width - 2; j++) {
                document.write("&nbsp;&nbsp;");
            }
            if (width > 1) {
                document.write("*");
            }
        }
        document.write("<br>");
    }
}
BoxStar(20, 15)
