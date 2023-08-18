interface Openable {
    open(): void;
}

interface Savable {
    save(): void;
}

interface Printable {
    print(): void;
}

class Word implements Openable, Savable, Printable {
    open(): void {
        console.log("Opening Word document");
    }

    save(): void {
        console.log("Saving Word document");
    }

    print(): void {
        console.log("Printing Word document");
    }
}

class PDF implements Openable, Savable {
    open(): void {
        console.log("Opening PDF document");
    }

    save(): void {
        console.log("Saving PDF document");
    }
}