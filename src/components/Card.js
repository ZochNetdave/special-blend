import React from "react";
import { Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "typeface-bad-script";
import emailjs from "@emailjs/browser";

import Snackbar from "@mui/material/Snackbar";

function Card() {
	//JS

	const [state, setState] = React.useState({
		open: false,
		failOpen: false,
		vertical: "top",
		horizontal: "center",
	});

	const { vertical, horizontal, open, failOpen } = state;

	const times = ["9:20am", "9:30am", "9:40am", "9:50am", "10:00am"];
	const options = ["Fill it up", "Leave a little room", "Leave a lot of room"];

	const handleRefresh = () => {
		window.location.reload(false);
	};

	const orderValues = {
		name: "",
		pickUpTime: "",
		items: [],
		leaveRoom: "",
		specialRequests: "",
	};

	const products = [
		"Hot Chocolate - 8oz - $1",
		"Hot Coffee - 8oz - $1",
		"Hot Chocolate - 16oz - $2",
		"Iced Coffee - 16oz - $2",
		"Hot Chocolate - 16oz - $2",
		"Lemonade - 16oz - $2",
		"Strawberry Lemonade - 16oz - $2",
		"Cherry Lemonade - 16oz - $2",
		"Blueberry Lemonade - 16oz - $2",
	];

	//CSS
	const containerStyles = {
		backgroundColor: "lightgrey",
		justifyContent: "center",
		width: "95%",
		borderRadius: "5px",
		padding: "10px",
		color: "white",
	};
	const innerContainer = {
		borderRadius: "5px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: "#367588",
		padding: "5px",
	};

	// const handleChange = (e) => {
	// 	console.log(e);
	// };

	const handleClick = (newState) => () => {
		if (orderValues.name && orderValues.items && orderValues.pickUpTime)
			try {
				sendEmail();
				setState({ ...newState, open: true });
				setTimeout(() => {
					handleRefresh();
				}, 2500);
			} catch (error) {
				console.error(error);
			}
		else {
			setState({ ...newState, failOpen: true });
		}
	};

	const handleClose = () => {
		setState({ ...state, open: false });
		setState({ ...state, failOpen: false });
	};

	const sendEmail = () => {
		emailjs
			.send("special_blend", "order_id", orderValues, {
				publicKey: "z1_6XIpFaLLStWSxC",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
	};
	//JSX
	return (
		<div style={containerStyles}>
			<p
				style={{
					fontFamily: "Bad Script",
					fontSize: "20px",
					fontWeight: "bold",
					color: "black",
				}}>
				Curbside Order Form
			</p>
			<div style={innerContainer}>
				<TextField
					// style={textInput}
					id="standard-basic"
					label="Name"
					color={"danger"}
					required={true}
					sx={{ input: { color: "white" }, label: { color: "white" } }}
					onChange={(event) => {
						orderValues.name = event.target.value;
					}}
				/>
				<p>Pick Up Time</p>
				{times.map((time) => {
					return (
						<span
							style={{
								display: "flex",
								flexDirection: "row",
								color: "white",
							}}>
							<Checkbox
								style={{ color: "lightgrey" }}
								value={time}
								onChange={(event) => {
									orderValues.pickUpTime = event.target.value;
								}}
							/>
							<p>{time}</p>
						</span>
					);
				})}
				{products.map((product) => {
					return (
						<span
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									width: "95%",
									backgroundColor: "#50C878",
									borderRadius: "5px",
									padding: "5px",
									margin: "3px",
									marginBottom: "5px",
									justifyContent: "center",
									boxShadow: ".5px 1px 1px 1px grey",
								}}>
								<span
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<p
										style={{
											width: "100%",
											color: "white",
											fontWeight: "bold",
										}}>
										{product}
									</p>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
										}}>
										<p
											style={{
												fontSize: "9px",
												color: "white",
												marginBottom: "3px",
												marginTop: "-3px",
											}}>
											Quantity
										</p>
										<select
											style={{ width: "50px", backgroundColor: "white" }}
											onChange={(event) => {
												orderValues.items.push(event.target.value);
											}}>
											<option value={`${product} quantity: ` + 0}>0</option>
											<option value={`${product} quantity: ` + 1}>1</option>
											<option value={`${product} quantity: ` + 2}>2</option>
											<option value={`${product} quantity: ` + 3}>3</option>
											<option value={`${product} quantity: ` + 4}>4</option>
											<option value={`${product} quantity: ` + 5}>5</option>
											<option value={`${product} quantity: ` + 6}>6</option>
											<option value={`${product} quantity: ` + 7}>7</option>
											<option value={`${product} quantity: ` + 8}>8</option>
											<option value={`${product} quantity: ` + 9}>9</option>
											<option value={`${product} quantity: ` + 10}>10</option>
										</select>
									</div>
								</span>
							</div>
						</span>
					);
				})}
				<div>
					<span>
						<p
							style={{
								fontFamily: "Bad Script",
								fontSize: "20px",
								fontWeight: "bold",
								color: "white",
							}}>
							Room for Creamer / Syrup
						</p>
						<hr style={{ color: "white", width: "85%" }} />
						{options.map((opt) => {
							return (
								<span
									style={{
										display: "flex",
										flexDirection: "row",
										color: "white",
									}}>
									<Checkbox
										style={{ color: "lightgrey" }}
										value={opt}
										onChange={(event) => {
											orderValues.leaveRoom = event.target.value;
										}}
									/>
									<p>{opt}</p>
								</span>
							);
						})}
					</span>
					<hr style={{ color: "white", width: "85%" }} />
					<p
						style={{
							fontFamily: "Bad Script",
							fontSize: "20px",
							fontWeight: "bold",
							color: "white",
							marginBottom: "-15px",
						}}>
						Special Requests
					</p>
					<p
						style={{
							fontFamily: "Bad Script",
							fontSize: "16px",
							fontWeight: "bold",
							color: "white",
						}}>
						<p>(sugar free lemonade, no ice, extra ice etc...)</p>
					</p>
					<span style={{ display: "flex", justifyContent: "center" }}>
						<TextField
							id="standard-basic"
							label="Special Requests"
							required={true}
							multiline
							onChange={(event) => {
								orderValues.specialRequests = event.target.value;
							}}
							color={"danger"}
							maxRows={4}
							style={{ width: "97%" }}
							sx={{
								input: { color: "white" },
								label: { color: "white" },
							}}
						/>
					</span>
				</div>
			</div>
			<span
				style={{
					justifyContent: "center",
					display: "flex",
					marginTop: "10px",
				}}>
				<div
					style={{
						justifyContent: "center",
						display: "flex",
						backgroundColor: "#50C878",
						borderRadius: "10px",
						textAlign: "center",
						width: "50%",
						boxShadow: ".5px 1px 1px 1px grey",
					}}>
					<Box
						onClick={handleClick({
							vertical: "bottom",
							horizontal: "center",
							color: "white",
						})}
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: "center",
						}}>
						<Button>
							<p style={{ color: "white" }}>Submit</p>
						</Button>
					</Box>
				</div>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					onClose={handleClose}
					message="Order Submitted"
					key={vertical + horizontal}
					ContentProps={{
						sx: {
							backgroundColor: "white",
							color: "black",
							textAlign: "center",
							justifyContent: "center",
							fontSize: "19px",
							boxShadow: "1px 1px 1px 1px grey",
						},
					}}
				/>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={failOpen}
					onClose={handleClose}
					message="Please Fill out Missing Forms"
					key={vertical - horizontal}
					ContentProps={{
						sx: {
							backgroundColor: "white",
							color: "black",
							textAlign: "center",
							justifyContent: "center",
							fontSize: "19px",
							boxShadow: "1px 1px 1px 1px grey",
						},
					}}
				/>
			</span>
		</div>
	);
}

export default Card;
