(this["webpackJsonparctic-circle"]=this["webpackJsonparctic-circle"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),r=o.n(n),l=o(8),s=o.n(l),i=(o(14),o(3)),a=o(4),u=o(2),h=o(6),d=o(5),p=(o(15),o(16),function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){var t=this.props.node,e=t.row,o=t.col,n=t.full;return Object(c.jsx)("div",{className:"node",style:{width:this.props.nodeSize,height:this.props.nodeSize},id:"node ".concat(e," ").concat(o),children:n})}}]),o}(n.Component)),b=(o(17),function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){var t=this.props.block,e=t.row,o=t.col,n=t.color,r=t.arrow;return"up"===r||"down"===r?Object(c.jsx)("div",{style:{left:document.getElementById("node ".concat(e," ").concat(o)).offsetLeft,top:document.getElementById("node ".concat(e," ").concat(o)).offsetTop,backgroundColor:n,width:2*this.props.nodeSize,height:this.props.nodeSize},className:"block",id:"block ".concat(e," ").concat(o)}):Object(c.jsx)("div",{style:{left:document.getElementById("node ".concat(e," ").concat(o)).offsetLeft,top:document.getElementById("node ".concat(e," ").concat(o)).offsetTop,backgroundColor:n,width:this.props.nodeSize,height:2*this.props.nodeSize},className:"block",id:"block ".concat(e," ").concat(o)})}}]),o}(n.Component)),f=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var c;return Object(i.a)(this,o),(c=e.call(this,t)).state={},c}return Object(a.a)(o,[{key:"render",value:function(){var t=this,e=this.props.blocks;return Object(c.jsx)("div",{className:"blocks",children:e.map((function(e,o){return Object(c.jsx)(b,{block:e,nodeSize:t.props.nodeSize},o)}))})}}]),o}(n.Component);function j(){for(var t=this.state.blocks,e=this.state.grid,o=0;o<e.length-1;o++)for(var c=0;c<e[o].length;c++){var n=e[o+1].length/2-1+e[o][c].col;try{if(!e[o][c].full&!e[o][c+1].full&!e[o+1][n].full&!e[o+1][n+1].full){e[o][c].full=1,e[o][c+1].full=1,e[o+1][n].full=1,e[o+1][n+1].full=1;var r=e[o][c].row,l=e[o][c].col;Math.random()<.5?t.push({row:r,col:l,color:"blue",arrow:"up"},{row:r-1,col:l,color:"HotPink",arrow:"down"}):t.push({row:r,col:l,color:"red",arrow:"left"},{row:r,col:l+1,color:"green",arrow:"right"})}}catch(s){}}this.setState({blocks:t,grid:e})}function v(){for(var t=this.state.blocks,e=this.state.grid,o=0;o<e.length;o++)for(var c=0;c<e[o].length;c++)e[o][c].full=0;for(var n=0;n<t.length;n++){var r=void 0,l=void 0,s=void 0;switch(t[n].arrow){case"up":t[n].row=t[n].row+1,l=e[r=e.length/2-1-t[n].row].length/2-1+t[n].col,e[r][l].full=1,e[r][l+1].full=1;break;case"down":t[n].row=t[n].row-1,l=e[r=e.length/2-1-t[n].row].length/2-1+t[n].col,e[r][l].full=1,e[r][l+1].full=1;break;case"right":t[n].col=t[n].col+1,l=e[r=e.length/2-1-t[n].row].length/2-1+t[n].col,s=e[r+1].length/2-1+t[n].col,e[r][l].full=1,e[r+1][s].full=1;break;case"left":t[n].col=t[n].col-1,l=e[r=e.length/2-1-t[n].row].length/2-1+t[n].col,s=e[r+1].length/2-1+t[n].col,e[r][l].full=1,e[r+1][s].full=1}}this.setState({blocks:t,grid:e})}function g(){for(var t=this.state.blocks,e=t.length,o=0;o<e;o++)for(var c=0;c<e;c++)switch(t[o].arrow){case"down":t[o].row===t[c].row+1&t[o].col===t[c].col&"up"===t[c].arrow&&(o<c?(t.splice(c,1),t.splice(o,1),o-=1,c-=2):(t.splice(o,1),t.splice(c,1),o-=2,c-=1),e-=2);break;case"right":t[o].row===t[c].row&t[o].col===t[c].col-1&"left"===t[c].arrow&&(o<c?(t.splice(c,1),t.splice(o,1),o-=1,c-=2):(t.splice(o,1),t.splice(c,1),o-=2,c-=1),e-=2)}this.setState({blocks:t})}function w(){for(var t=this,e=[],o=[],c=this.state.currSize,n=0;n<c+1;n++){for(var r=0;r<2*(n+1);r++)o.push({row:c-n,col:r-n,full:0});e.push(o),o=[]}for(var l=0;l<c+1;l++){for(var s=0;s<2*(c+1-l);s++)o.push({row:-1*(l+1),col:s+l-c,full:0});e.push(o),o=[]}this.setState({currSize:c+1,grid:e}),setTimeout((function(){return t.setState({blocks:t.state.blocks})}),1)}var k=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var c;return Object(i.a)(this,o),(c=e.call(this,t)).state={currSize:1,grid:[],blocks:[],nodeSize:30,currStep:3,stop:0},c.step=c.step.bind(Object(u.a)(c)),c.play=c.play.bind(Object(u.a)(c)),c.fill=j.bind(Object(u.a)(c)),c.move=v.bind(Object(u.a)(c)),c.remove=g.bind(Object(u.a)(c)),c.increaseGrid=w.bind(Object(u.a)(c)),c.play=c.play.bind(Object(u.a)(c)),c.stop=c.stop.bind(Object(u.a)(c)),c.playing=c.playing.bind(Object(u.a)(c)),c}return Object(a.a)(o,[{key:"step",value:function(){switch(this.state.currStep%4){case 0:this.increaseGrid();break;case 1:this.remove();break;case 2:this.move();break;case 3:this.fill()}this.setState({currStep:this.state.currStep+1})}},{key:"play",value:function(){var t=this;this.setState({stop:0}),setTimeout((function(){return t.playing()}),1)}},{key:"playing",value:function(){var t=this;this.state.stop||(this.step(),setTimeout((function(){t.playing()}),500))}},{key:"stop",value:function(){this.setState({stop:1})}},{key:"componentDidMount",value:function(){this.setState({grid:[[{row:0,col:0,full:0},{row:0,col:1,full:0}],[{row:-1,col:0,full:0},{row:-1,col:1,full:0}]]})}},{key:"render",value:function(){var t=this,e=this.state.grid;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"App-header",children:"i! love! you!"}),Object(c.jsx)("button",{onClick:this.step,className:"button",children:"Step"}),Object(c.jsx)("button",{onClick:this.play,className:"button",children:"Play"}),Object(c.jsx)("button",{onClick:this.stop,className:"button",children:"Stop"}),Object(c.jsx)("div",{className:"grid",children:e.map((function(e,o){return Object(c.jsx)("div",{children:e.map((function(e,o){return Object(c.jsx)(p,{node:e,nodeSize:t.state.nodeSize},o)}))},o)}))}),Object(c.jsx)(f,{blocks:this.state.blocks,nodeSize:this.state.nodeSize})]})}}]),o}(r.a.Component),O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,l=e.getTTFB;o(t),c(t),n(t),r(t),l(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.b70ab420.chunk.js.map