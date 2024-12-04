const doctores = [
    {
        name: "Dr. Juan Perez",
        area: "Cirugía",
        description: "El Dr. Juan Pérez cuenta con más de 20 años de experiencia en cardiología.",
        image: "img/doctor1.webp",
        yearsExp: 3,
        schedule: 
        {
            startTime: "10:00",
            endTime: "12:00"
        },
        contact:
        {
            email: "jperez@hbv.cl",
            phone: "999999999"
        }
    },
    {
        name: "Dra. Maria Lopez",
        area: "Oftalmología",
        description: "La Dra. María López es reconocida por su trabajo en consultas generales.",
        image: "img/doctora2.webp",
        yearsExp: 4,
        schedule: 
        {
            startTime: "08:30",
            endTime: "17:30"
        },
        contact:
        {
            email: "mlopez@hbv.cl",
            phone: "988888888"
        }
    },
    {
        name: "Dr. Carlos Martinez",
        area: "Psicología",
        description: "El Dr. Carlos Martínez se especializa en atención hospitalaria.",
        image: "img/doctor3.webp",
        yearsExp: 1,
        schedule: 
        {
            startTime: "09:45",
            endTime: "10:15"
        },
        contact:
        {
            email: "cmartinez@hbv.cl",
            phone: "977777777"
        }
    },
    {
        name: "Dra. Elena Garcia",
        area: "Kinesiología",
        description: "Habitaciones confortables para tu recuperación.",
        image: "img/doctora4.webp",
        yearsExp: 5,
        schedule: 
        {
            startTime: "11:11",
            endTime: "20:20"
        },
        contact:
        {
            email: "egarcia@hbv.cl",
            phone: "966666666"
        }
    }
]

const servicios = [
    {
        name: "Urgencias",
        description: "Contamos con personal especializado las 24 horas del día, preparados para atender cualquier tipo de emergencia médica.",
        image: "img/home/urgencia.jpg"
    },
    {
        name: "Especialidades",
        description: "Cubrimos más de 30 especialidades, desempeñadas por profesionales en constante perfeccionamiento.",
        image: "img/home/especialidades.jpg"
    },
    {
        name: "Laboratorio",
        description: "Proveemos servicio de medicamoentos, toma de muestras biológicas y una gran variedad de exámenes.",
        image: "img/home/medicamentos.jpg"
    }
]

class DoctorArray
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    AddDoctor(doctor)
    {
        this.content.push(doctor);
    }

    RemoveDoctor(name)
    {
        let removeIndex = this.content.findIndex(doctor => doctor.name === name);
        if(removeIndex >= 0)
        {
            this.content.splice(removeIndex, 1);
        }
    }

    SetDoctors(newDoctors)
    {
        this.content = newDoctors;
    }

    FindDoctor(name)
    {
        return this.content.find(doctor => doctor.name === name);
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

class ReserveStack
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    AddReserve(reserve)
    {
        this.content.push(reserve);
    }

    GetLatest()
    {
        if(this.content.length > 0)
            return this.content.at(-1)
        else return null;
    }

    GetNext()
    {
        if(this.content.length > 0)
            return this.content.at(0);
        else return null;
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

class PatientQueue
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    EnqueuePatient(patient)
    {
        patient.order = this.content.length;
        this.content.push(patient);
    }

    DequeuePatient()
    {
        if(this.content.length > 0)
        {
            this.content.splice(0, 1);
        }
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

const patientExample = 
{
    name: "Test Patient",
    hours:
    [
        {
            service: "Cirugia",
            cost: 30000
        },
        {
            service: "Oftalmologia",
            cost: 15000
        },
        {
            service: "Kinesiologia",
            cost: 10000
        },
    ]
}

var reserveStack = new ReserveStack();
var patientQueue = new PatientQueue();
var doctorArray = new DoctorArray();
fetchDoctores();

function log(message)
{
    console.log(message);
}

function reservePrompt()
{
    let name = prompt("Ingrese su nombre completo");
    if(name == null) return;

    console.log(`Nombre: ${name}`);

    let validatedEmail = false;
    let email = "";

    while(!validatedEmail)
    {
        email = prompt("Ingrese su correo electrónico");
        if(email == null) return;

        let emailValidation = /^\S+@\S+\.\S+$/;
        validatedEmail = emailValidation.test(email) && typeof(email) === "string" && email.includes("@");

        if(validatedEmail)
            console.log(`Correo: ${email}`);
        else
            alert("Correo no válido!");
    }

    let validatedPhone = false;
    let phone = "";

    while(!validatedPhone)
    {
        phone = prompt("Ingrese su numero de teléfono");
        if(phone == null) return;

        let phoneValidation = /^(\+56)?9[0-9]{8}$/;
        validatedPhone = phoneValidation.test(phone) && typeof(phone) === "string";

        if(validatedPhone)
            console.log(`Teléfono: ${phone}`);
        else
            alert("Numero de teléfono no válido!");
    }

    let response = confirm(
        `Sus datos son: \n
        Nombre: ${name} \n
        Correo: ${email} \n
        Teléfono: ${phone} \n
        ¿Es correcto?`);

    if(response)
    {
        alert("Reserva realizada!");
        let newReserve = {}
        newReserve.name = name;
        newReserve.email = email;
        newReserve.phone = phone;

        reserveStack.AddReserve(newReserve);
        reserveStack.Print();
    }
}

function filterDoctorsByYears(years)
{
    try
    {
        let divListaDoctores = document.getElementById("listaDoctores");
        divListaDoctores.textContent = "";
        doctorArray.content.forEach(d => 
        {
            if(d.yearsExp >= years)
            {
                let divDoctor = document.createElement("div");
                divDoctor.className = "team-section__card";
                divDoctor.innerHTML = doctorCard(d);
                divListaDoctores.appendChild(divDoctor);
            }
        });
    }
    catch
    {
        console.log(`invalid value for years: ${years}`);
    }
}

function doctorCard(doctor)
{
    try
    {
        let doctorYears = `${doctor.yearsExp} ${doctor.yearsExp == 1 ? "año" : "años"} de experiencia`

        let doctorHTML = `
        <img src="${doctor.image}" alt="${doctor.name}" class="team-section__card-image">
        <div class="team-section__card-body">
            <h3 class="team-section__card-title">${doctor.name}</h3>
            <p class="team-section__card-specialty">${doctorYears}</p>
            <p class="team-section__card-specialty">${doctor.area}</p>
            <p class="team-section__card-description">${doctor.description}</p>
            <p class="team-section__card-description">Precio consulta: ${calculateDiscount(doctor)}</p>
            <p class="team-section__card-description">Horas disponibles: ${calculateTotalDoctorHours(doctor.hours)}</p>
        </div>`;

        return doctorHTML;
    }
    catch(e)
    {
        console.log(e);
        return null;
    }
}

function showServices()
{
    let divListaServicios = document.getElementById("listaServicios");
    divListaServicios.textContent = "";
    servicios.forEach(s => 
    {
        let divServicio = document.createElement("div");
        divServicio.className = "services-section__card";
        divServicio.innerHTML = serviceCard(s);
        divListaServicios.appendChild(divServicio);
    });
}

function serviceCard(service)
{
    let serviceHTML = `
    <img src="${service.image}" class="services-section__card-image">
    <div class="services-section__card-body">
        <h3 class="services-section__card-title">${service.name}</h3>
        <p class="services-section__card-description">
            ${service.description}
        </p>
    </div>
    `;

    return serviceHTML;
}

function clone(original)
{
    let newObject = structuredClone(original);
    newObject[0].name = "MODIFICADO";
    newObject[0].description = "MODIFICADO"
    newObject[0].area = "MODIFICADO"

    console.log(`Original: ${JSON.stringify(original)}`);
    console.log(`Modificado: ${JSON.stringify(newObject)}`);
}

function merge(object1, object2)
{
    let concat = [... object1, ...object2]
    console.log(`Concatenado: ${JSON.stringify(concat)}`);
}

function parse(target)
{
    console.log("Recorrido: ");
    target.forEach(item => 
    {
        console.log(item);
    });

    console.log(`Stringify: ${JSON.stringify(target)}`);
}

function findDoctor(targetName)
{
    targetName = targetName.toLowerCase();
    console.log(`Buscando: ${targetName}`)
    doctorArray.content.forEach(doctor => 
    {
        let doctorName = doctor.name.toLowerCase();
        if(doctorName.includes(targetName))
        {
            console.log(`Encontrado: ${JSON.stringify(doctor)}`)
            return doctor;
        }
    });
}

function sortDoctorsByExperience()
{
    let sortedDoctors = doctorArray.content;

    for (var i = 0; i < sortedDoctors.length; i++)
    {
        for (var j = 0; j < (sortedDoctors.length - i - 1); j++)
        {
            if (sortedDoctors[j].yearsExp > sortedDoctors[j + 1].yearsExp)
            {
                var temp = sortedDoctors[j]
                sortedDoctors[j] = sortedDoctors[j + 1]
                sortedDoctors[j + 1] = temp
            }
        }
    }

    doctorArray.SetDoctors(sortedDoctors);
    doctorArray.Print();
}

const eventoPaciente = new Event("nuevoPaciente");

document.addEventListener("nuevoPaciente", () => 
{
    console.log("Un nuevo paciente ha llegado.");
});

function patientArrived()
{
    document.dispatchEvent(eventoPaciente);
}

class Doctor
{
    constructor(nombre, especialidad, experiencia, pacientes)
    {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._experiencia = experiencia;
        this.pacientesAtendidos = pacientes;
    }

    getInformacion()
    {
        return `${this.nombre} -> Especialidad: ${this.especialidad}, Años de experiencia: ${this._experiencia}.`;
    }

    getPacientesAtendidos()
    {
        return this.pacientesAtendidos;
    }

    getExperience()
    {
        return this._experiencia;
    }

    setExperience(value)
    {
        try
        {
            if(value >= 0) this._experiencia = value;
        }
        catch
        {
            console.log("Error");
        }
    }
}

class Cirujano extends Doctor
{
    constructor(nombre, especialidad, experiencia, herramientaFavorita, operaciones)
    {
        super(nombre, especialidad, experiencia);
        this.herramientaFavorita = herramientaFavorita;
        this.operaciones = operaciones;
    }

    getInformacion()
    {
        return `${this.nombre} -> Especialidad: ${this.especialidad}, Años de experiencia: ${this._experiencia}, Herramienta favorita: ${this.herramientaFavorita}.`;
    }

    getPacientesAtendidos()
    {
        return this.operaciones;
    }
}

async function fetchDoctores()
{
    try
    {
        const response = await fetch("/js/doctores.json");
        if (!response.ok) throw new Error("Error al obtener datos");
        const datos = await response.json();
        console.log(datos);
        doctorArray.SetDoctors(datos);
        filterDoctorsByYears(0);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}

const clp = new Intl.NumberFormat("es-ES", 
{
    style:'currency', currency: 'CLP'}
);

function valueToCLP(valor)
{
    return clp.format(valor);
}

function calculateDiscount(doctor)
{
    const applyDiscount = (cost) => (discount) => cost - cost * discount;
    const valueWithDiscount = (cost) => applyDiscount(cost)(1 / doctor.totalPatients)
    return valueToCLP(valueWithDiscount(doctor.cost.base))
}

const lastWaitTimes = [15, 10, 30, 25, 12, 5];

const calculateAvgWaitTime = (waitTimes) =>
    waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

function calculateWaitTimes()
{
    console.log(`Average wait time: ${calculateAvgWaitTime(lastWaitTimes)}`);
}

const calculateTotalDoctorHours = (hours, index = 0) => 
{
    if (index === hours.length) return 0;
    return 1 + calculateTotalDoctorHours(hours, index + 1);
};

const calculateHourCost = (cost) => (amount) =>
    cost * amount;

function calculateTotalPatientCost()
{
    let total = 0;
    patientExample.hours.forEach(h => 
    {
        const hourCost = calculateHourCost(h.cost);
        total += hourCost(1);
    });

    console.log("Total cost: "+total);
}