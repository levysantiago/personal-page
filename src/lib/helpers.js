const helpers = {
  formatDate: (timestamp) => {
    const date = new Date(timestamp);
    const ye = new Intl.DateTimeFormat("pt", { year: "numeric" }).format(date);
    const mo = new Intl.DateTimeFormat("pt", { month: "long" }).format(date);
    const da = new Intl.DateTimeFormat("pt", { day: "2-digit" }).format(date);
    const newdate = `${mo} ${da}, ${ye}`;

    return newdate;
  },
};

export default helpers;
