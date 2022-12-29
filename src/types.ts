export interface Port {
  port_name: string;
  port_number: string;
  port_status: string;
  wait_times: {
    pedestrian: {
      ready: string;
      standard: string;
      pedwest: string;
      sentri: string;
    };
    vehicle: {
      ready: string;
      standard: string;
      pedwest: string;
      sentri: string;
    };
  };
}
