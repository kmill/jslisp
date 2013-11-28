2_compiler.1.js: 0_interp.js 1_compiler.jsl 2_base.jsl 2_compiler.jsl
	node 0_interp.js 1_compiler.jsl 2_base.jsl 2_compiler.jsl -o 2_compiler.1.js

2_compiler.2.js: 2_compiler.1.js 2_base.jsl 2_compiler.jsl
	node 2_compiler.1.js 2_base.jsl 2_compiler.jsl -o 2_compiler.2.js

2_compiler.js: 2_compiler.2.js 2_base.jsl 2_compiler.jsl
	node 2_compiler.2.js 2_base.jsl 2_compiler.jsl -o 2_compiler.js
	diff 2_compiler.2.js 2_compiler.js


3_compiler.1.js: 2_compiler.js 3_base.jsl 3_compiler.jsl
	node 2_compiler.js 3_base.jsl 3_compiler.jsl -o 3_compiler.1.js

3_compiler.2.js: 3_compiler.1.js 3_base.jsl 3_compiler.jsl
	node 3_compiler.1.js 3_base.jsl 3_compiler.jsl -o 3_compiler.2.js

3_compiler.js: 3_compiler.2.js 3_base.jsl 3_compiler.jsl
	node 3_compiler.2.js 3_base.jsl 3_compiler.jsl -o 3_compiler.js
	diff 3_compiler.2.js 3_compiler.js


4_compiler.1.js: 3_compiler.js 4_base.jsl 4_compiler.jsl
	node 3_compiler.js 4_base.jsl 4_compiler.jsl -o 4_compiler.1.js

4_compiler.2.js: 4_compiler.1.js 4_base.jsl 4_compiler.jsl
	node 4_compiler.1.js 4_base.jsl 4_compiler.jsl -o 4_compiler.2.js

4_compiler.js: 4_compiler.2.js 4_base.jsl 4_compiler.jsl
	node 4_compiler.2.js 4_base.jsl 4_compiler.jsl -o 4_compiler.js
	diff 4_compiler.2.js 4_compiler.js

compiler.js: 4_compiler.js
	cp 4_compiler.js compiler.js

clean:
	rm 2_compiler.1.js || true
	rm 2_compiler.2.js || true
	rm 2_compiler.js || true

	rm 3_compiler.1.js || true
	rm 3_compiler.2.js || true
	rm 3_compiler.js || true

	rm 4_compiler.1.js || true
	rm 4_compiler.2.js || true
	rm 4_compiler.js || true

	rm compiler.js || true