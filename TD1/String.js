Varianta 1:
<!DOCTYPE html>
<html>
<body>
<script>
var str = "Hello Hello Hello World";
var part1 = /(Hello )+/g;
var res = str.match(part1);
document.write(res);
</script>
</body>
</html>

Varianta 2 :
<!DOCTYPE html>
<html>
<body>
<script>
var str = "Hello Hello Hello Vorld!";
var part1 = /^Hello Hello Hello/g;
var res = str.match(part1);
document.write(res);
</script>
</body>
</html>
