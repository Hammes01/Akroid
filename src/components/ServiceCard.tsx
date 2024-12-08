import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <Card sx={{ maxWidth: 345, margin: "auto" }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ServiceCard;
