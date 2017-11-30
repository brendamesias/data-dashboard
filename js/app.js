window.addEventListener('load', function() {
  // variable que almacena  el texto junto de sede y generacion, el cual se muestra en la pantalla
  var sedeGeneration = document.getElementById('sede_generation');
  // console.log(sedeGeneration); // <a href="#" id="sede_generation">NUESTRAS SEDES</a>
  // variable que almacena la lista de sedes
  var listSedes = document.getElementById('listSedes');
  // console.log(listSedes); // <div id="listSedes" class="sedes_hiden"></div>
  var listGenerations = document.querySelectorAll('.listGenerations');
  // console.log(listGenerations); // todos los div con las generaciones
  // console.log(listGenerations.children);
  var generations = document.querySelectorAll('.generation');
  // console.log(generations); // (10) [a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation]
  var sedes = document.querySelectorAll('.sede');
  // console.log(sedes); // [a.sede =arequipa, a.sede =mexico, a.sede = lima, a.sede = chile] // lista de nodos
  sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('show');
  };
  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      var sede = event.target.dataset.sede;
      console.log(sede); // AQP
      // console.log(typeof sede); // string
      for (var j = 0; j < listGenerations.length; j++) {
        listGenerations[j].addEventListener('click', function(event) {
          // sconsole.log(event.target);
          var generation = event.target.dataset.generation;
          var students = data[sede][generation].students ;
          var studentAcount = students.length;
          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          var activeStudents = 0;
          for (var i1 = 0; i1 < students.length; i1++) {
            if (students(i1).active === true) {
              var activeStudents = (activeStudents + 1);
            };
            // hallando la cantidad todal de estudiantes INACTIVAS por generacion
            var inactiveStudents = students.length - activeStudents;

            //  ingresando a cada sprint
            var score = students[i1].sprints;
            // # de estudiantes que pasaron el 70% en Tech y Hse
            var scoreHse = '';
            for (var i2 = 0; i2 < score.length; i1++) {
              if (score[i2].hse > 840 && score[i2].tech > 1260) {
                var studentsHighScore = score[i2].hse.length;
                console.log(studentsHighScore);
              };
            };
          };
          // creando div que almacenará el # de estudiates
          var studentsDiv = document.createElement('div');
          studentsDiv.textContent = studentAcount;
          console.log(studentsDiv);
          // creando div que almacenará el # de estudiates INACTIVAS
          var inactiveStudentsDiv = document.createElement('div');
          inactiveStudents.textContent = inactiveStudents;
          console.log(inactiveStudentsDiv);
        });
      }
    });
  }
});
