import background from "../../../assets/13.jpg";

export const header = {
    minHeight: "180px",
    backgroundImage: `url(${background})`,
    display: "flex",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
export const leftSideWrapper = {
    borderBottom: "10px solid #2ebaee",
    flexGrow: 1,
};
export const leftSideBlock = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
};
export const headerTitle = {
    fontSize: {
            xs: "35px",
            sm: "56px"
    },
    fontWeight: "200",
    textAlign: "center",
    color: "white"
};
export const rightSideWrapper = {
    backgroundColor: "#14213d",
    opacity: 0.8,
    flexGrow: 1,
    borderBottom: "10px solid transparent",
};
export const rightSideBlock = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
};
export const tasks = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
export const tasksNumber = {
    fontSize: "36px",
    color: "white"
};
export const tasksTitle = {
    fontSize: "20px",
    color: "white"
};