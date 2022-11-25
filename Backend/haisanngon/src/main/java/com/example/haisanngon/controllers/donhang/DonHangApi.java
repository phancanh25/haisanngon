package com.example.haisanngon.controllers.donhang;

import com.example.haisanngon.configurations.entities.DonHang;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "donHang", description = "Rest API for don hang methods", tags = { "Don Hang", })
@RequestMapping("/donHang")
public interface DonHangApi {
    @RequestMapping(value = "/getAllDonHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<DonHang> list();
}
